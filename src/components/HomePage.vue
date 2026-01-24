<template>
  <div class="min-h-screen bg-[#1F1F1F] font-poppins text-white selection:bg-yellow-500 selection:text-black overflow-hidden relative flex flex-col justify-center">
    
    <!-- Background Elements -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      <div class="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-gray-700/5 rounded-full blur-3xl"></div>
    </div>

    <!-- Main Content -->
     <main class="max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 transition-all duration-300">

      <!-- Left Column: Text -->
      <div class="space-y-8 animate-slide-up text-center md:text-left">
        <h1 class="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          MANAGE SHIFTS, LEAVE, <br class="hidden md:block" />
          OVERTIME SEAMLESSLY
        </h1>
        <p class="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
          Everything needed to organize schedules, leave, and overtime with ease. Keep workforce management seamless and operations efficient.
        </p>
        
        <div class="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-6 pt-4">
          <button @click="handleAction" class="bg-[#d4a017] hover:bg-[#b88b14] text-gray-900 font-bold rounded-full px-10 py-4 text-lg transition transform hover:scale-105 shadow-[0_4px_14px_0_rgba(212,160,23,0.39)]">
            {{ isLoggedIn ? 'Submit Requests' : 'Get Started' }}
          </button>
          <a href="#" class="text-white text-lg font-medium hover:text-[#d4a017] transition underline-offset-4 hover:underline">
            View Services
          </a>
        </div>
      </div>

      <!-- Right Column: Image -->
      <div class="relative animate-slide-in-right flex justify-center">
        <!-- Decor blobs behind image -->
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-tr from-yellow-500/20 to-transparent rounded-full blur-2xl"></div>
        
        <img 
          src="https://cdni.iconscout.com/illustration/premium/thumb/business-woman-working-on-laptop-2974929-2477353.png" 
          alt="Productivity Illustration" 
          class="relative z-10 w-full max-w-lg h-auto drop-shadow-2xl hover:scale-[1.02] transition duration-500 object-contain"
        />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      isLoggedIn: false
    };
  },
  mounted() {
    // Check if user is logged in
    this.isLoggedIn = !!localStorage.getItem('token');
  },
  methods: {
    handleAction() {
      if (this.isLoggedIn) {
        // Logic for Submit Requests
        // For now, it stays on page or could navigate to a request form
        console.log('Navigate to request submission');
      } else {
        this.$router.push('/login');
      }
    }
  }
};
</script>

<style scoped>
.animate-slide-up {
  animation: slideUp 0.8s ease-out forwards;
}

@keyframes slideUp {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out forwards;
}

@keyframes slideInRight {
  from { transform: translateX(30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
</style>
