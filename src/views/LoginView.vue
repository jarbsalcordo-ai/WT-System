<template>
  <div class="min-h-screen bg-[#1F1F1F] font-montserrat flex text-white overflow-hidden">
    <div class="absolute top-8 left-8 z-20">
          <router-link to="/" class="flex items-center text-white hover:text-[#d4a017] transition-colors group">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span class="font-medium text-lg">return to home</span>
          </router-link>
        </div>
    
    <!-- Pattern Background (Optional, subtle reuse from Home for consistency) -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div class="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-gray-700/5 rounded-full blur-3xl"></div>
    </div>

    <!-- Left Side: Image (Desktop Only) -->
    <div class="hidden md:flex md:w-1/2 justify-center items-center relative z-10 bg-[#1F1F1F]">
        <!-- You can add a specific background or pattern here for the left side if desired -->
        <img 
          src="@/assets/images/loginimg.png" 
          alt="Welcome" 
          class="w-full max-w-2xl object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
        />
    </div>

    <!-- Right Side: Login Form -->
    <div class="w-full md:w-1/2 flex flex-col justify-center items-center px-6 relative z-10 bg-[#1F1F1F]">
    

        <!-- Main Content Center -->
        <div class="w-full max-w-md mx-auto">
          
          <!-- Logo Section -->
          <div class="text-center mb-10">
            <div class="mb-3 flex justify-center">
               <img src="@/assets/images/sitelogo.png" alt="WatchTower Logo" class="h-32 w-auto" />
            </div>
            <h2 class="text-[#d4a017] font-bold text-xl tracking-wide uppercase">WatchTower Virtual Guards</h2>
          </div>

          <!-- Login Form -->
          <div class="w-full space-y-5">
            


            <!-- Inputs Wrapper -->
            <div class="space-y-4">
               <!-- Identity Input (Toggles based on Role) -->
                 <input 
                  v-model="identifier"
                  @input="identifier = $event.target.value.toUpperCase()"
                  type="text" 
                  placeholder="Enter Company ID"
                  class="w-full bg-white text-gray-900 rounded-xl px-5 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-[#d4a017] placeholder-gray-500 italic uppercase"
                 />

              <!-- Password Input -->
              <div class="relative">
                 <input 
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'" 
                  placeholder="Enter Password" 
                  class="w-full bg-white text-gray-900 rounded-xl px-5 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-[#d4a017] placeholder-gray-500 italic pr-12"
                 />
                 <button @click="showPassword = !showPassword" class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-800 focus:outline-none">
                   <!-- Eye Icon -->
                   <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                   </svg>
                   <!-- Eye Slash (for toggled state) -->
                   <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                   </svg>
                 </button>
              </div>
            </div>

            <!-- Login Button -->
            <!-- Login Button -->
            <button @click="handleLogin" class="w-full bg-[#d4a017] hover:bg-[#b88b14] text-black font-semibold rounded-xl py-3.5 text-lg transition-transform transform active:scale-95 shadow-lg mt-8">
              Login
            </button>

          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      identifier: '',
      password: '',
      showPassword: false,

    }
  },
  methods: {
    async handleLogin() {
      if (!this.identifier || !this.password) {
        alert('Please enter your credentials.');
        return;
      }

      try {
        const response = await fetch('http://localhost:3000/api/login', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({ 
              identifier: this.identifier, 
              password: this.password
           })
        });

        const data = await response.json();

        if (response.ok) {
           // Login Success
           localStorage.setItem('token', data.token);
           localStorage.setItem('user', JSON.stringify(data.user));
           
           // Redirect based on role
           const role = data.user.role;
           if (role === 'Admin') {
              this.$router.push('/admin-dashboard');
           } else if (role === 'HR Manager') {
              this.$router.push('/hr-dashboard');
           } else if (role === 'Operations Manager') {
              this.$router.push('/om-dashboard');
           } else if (role === 'Department Head') {
              this.$router.push('/dept-head-dashboard');
           } else {
              // Default for Employees, Officers, etc.
              this.$router.push('/dashboard');
           }
        } else {
           // Login Failed
           alert(data.error || 'Login failed');
        }
      } catch (error) {
        console.error('Login error:', error);
        alert('An server error occurred. Please ensure the backend is running.');
      }
    }
  }
};
</script>

<style scoped>
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}
.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
