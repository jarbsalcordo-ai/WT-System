<template>
  <nav 
    :class="[
      'fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-10 py-4 max-w-7xl mx-auto font-poppins text-white z-50 transition-all duration-300',
      isScrolled ? 'bg-[#1F1F1F]/50 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
    ]"
    style="left: 50%; transform: translateX(-50%); max-width: 100%;" 
  > <!-- Centering fixed nav with max-width usually requires specific handling, or just w-full with inner container. Let's simplify: w-full and inner container for content. -->
    
    <div class="max-w-7xl mx-auto w-full flex items-center justify-between px-6 md:px-10">
        <!-- Logo -->
        <div class="flex flex-col items-center z-50">
          <div class="mb-0">
            <img src="@/assets/images/sitelogo.png" alt="WatchTower Logo" :class="[isScrolled ? 'h-12 md:h-20' : 'h-16 md:h-32', 'w-auto transition-all duration-300']" />
          </div>
        </div>

        <!-- Desktop Nav Links (Pill Container) -->
        <div :class="[isScrolled ? 'hidden opacity-0 scale-95' : 'hidden md:flex opacity-100 scale-100', 'items-center space-x-8 border border-[#d4a017] rounded-full px-10 py-3 bg-opacity-20 bg-gray-800 backdrop-blur-sm transition-all duration-300']">
          <router-link to="/" class="text-white hover:text-yellow-400 transition">Home</router-link>
          <router-link to="/submit-request" class="text-white hover:text-yellow-400 transition">Submit Request</router-link>
          <a href="#" class="text-white hover:text-yellow-400 transition">Schedules</a>
          <a href="#" class="text-white hover:text-yellow-400 transition">Company</a>
        </div>

        <!-- Desktop Login Button -->
        <div :class="[isScrolled ? 'hidden' : 'hidden md:block', 'transition-all duration-300']">
          <router-link to="/login">
            <button class="bg-[#d4a017] hover:bg-[#b88b14] text-gray-900 font-semibold rounded-full px-8 py-3 transition shadow-lg">
              Login
            </button>
          </router-link>
        </div>

        <!-- Hamburger Button (Mobile & Scrolled Desktop) -->
        <div :class="[isScrolled ? 'block' : 'md:hidden', 'z-50 transition-all duration-300']">
          <button @click="toggleMenu" class="text-white focus:outline-none p-2 rounded-full  transition">
            <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <transition name="fade">
      <div v-if="isMenuOpen" class="fixed inset-0 bg-[#1F1F1F] bg-opacity-95 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8 text-center h-screen w-screen">
        <router-link to="/" @click="toggleMenu" class="text-2xl font-semibold text-white hover:text-yellow-400 transition">Home</router-link>
        <router-link to="/submit-request" @click="toggleMenu" class="text-2xl font-semibold text-white hover:text-yellow-400 transition">Submit Request</router-link>
        <a href="#" @click="toggleMenu" class="text-2xl font-semibold text-white hover:text-yellow-400 transition">Schedules</a>
        <a href="#" @click="toggleMenu" class="text-2xl font-semibold text-white hover:text-yellow-400 transition">Company</a>
        
        <router-link to="/login" @click="toggleMenu">
          <button class="mt-4 bg-[#d4a017] hover:bg-[#b88b14] text-gray-900 font-bold rounded-full px-10 py-4 text-xl transition shadow-[0_4px_14px_0_rgba(212,160,23,0.39)]">
            Login
          </button>
        </router-link>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isMenuOpen: false,
      isScrolled: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      
      // Prevent scrolling when menu is open
      if (this.isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    }
  }
};
</script>

<style scoped>
/* Ensure Poppins is applied if not globally */
.font-poppins {
  font-family: 'Poppins', sans-serif;
}

/* Vue Transition Styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
