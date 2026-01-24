<template>
  <div class="min-h-screen bg-[#1F1F1F] font-montserrat text-white selection:bg-yellow-500 selection:text-black overflow-x-hidden relative">
    
    <!-- Background Elements -->
    <div class="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      <div class="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-gray-700/5 rounded-full blur-3xl"></div>
    </div>

    <!-- Hero Section -->
    <section class="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10 min-h-screen pt-20">
      <!-- Left Column: Text -->
      <div class="space-y-8 animate-slide-up text-center md:text-left">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
          MANAGE SHIFTS, LEAVE,
          OVERTIME SEAMLESSLY
        </h1>
        <p class="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0">
          Everything needed to organize schedules, leave, and overtime with ease. Keep workforce management seamless and operations efficient.
        </p>
        
        <div class="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-6 pt-4">
          <button class="bg-[#d4a017] hover:bg-[#b88b14] text-gray-900 font-bold rounded-full px-10 py-4 text-lg transition transform hover:scale-105 shadow-[0_4px_14px_0_rgba(212,160,23,0.39)]">
            Get Started
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
    </section>

    <!-- Features Showcase Section -->
    <section class="max-w-7xl mx-auto px-6 pb-32 relative z-20 -mt-20 md:-mt-64">
      <div class="text-center mb-16 space-y-4">
      </div>

            <!-- Features Image Container -->
      <div class="animate-slide-up" style="animation-delay: 0.2s;">
        <RequestCards />
      </div>
    </section>

    <KeyFeatures />
    
    <!-- How It Works Section -->
    <HowItWorks />

    <!-- Mobile & Accessibility Section -->
    <MobileAccessibility />

    <!-- Page Footer -->
    <PageFooter />



  </div>
</template>

<script>
import HowItWorks from '@/components/HowItWorks.vue';
import KeyFeatures from '@/components/KeyFeatures.vue';
import MobileAccessibility from '@/components/MobileAccessibility.vue';
import PageFooter from '@/components/PageFooter.vue';
import RequestCards from '@/components/RequestCards.vue';

export default {
  name: "HomeView",
  components: {
    RequestCards,
    KeyFeatures,
    HowItWorks,
    MobileAccessibility,
    PageFooter
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
