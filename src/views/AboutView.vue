<template>
  <div class="min-h-screen bg-[#1F1F1F] font-poppins text-white flex flex-col">
    <div class="flex-grow pt-36 pb-12 px-6">
      <div class="max-w-4xl mx-auto text-center animate-fade-in-up">
        <h1 class="text-4xl md:text-5xl font-bold mb-8 text-[#d4a017]"><span class="text-white">About</span> WatchTower</h1>
        
        <p class="text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
          WatchTower is a premier workforce management solution designed to streamline operations, optimize scheduling, and empower employees. We believe in efficiency, transparency, and the power of organized data to drive business success.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div class="bg-[#2A2A2A] p-8 rounded-2xl border border-gray-700 shadow-xl hover:border-[#d4a017]/50 transition duration-300">
            <div class="w-12 h-12 bg-[#d4a017]/20 rounded-full flex items-center justify-center mb-4">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#d4a017]">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
               </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Our Mission</h3>
            <p class="text-gray-400">To provide cutting-edge tools that simplify complex workforce challenges, ensuring that every shift is covered and every employee is valued.</p>
          </div>

          <div class="bg-[#2A2A2A] p-8 rounded-2xl border border-gray-700 shadow-xl hover:border-[#d4a017]/50 transition duration-300">
            <div class="w-12 h-12 bg-[#d4a017]/20 rounded-full flex items-center justify-center mb-4">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#d4a017]">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
               </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Community</h3>
            <p class="text-gray-400">We foster a community of proactive leaders and dedicated team members, building a culture of reliability and excellence.</p>
          </div>
        </div>

        <div class="mt-16">
          <h2 class="text-3xl font-bold mb-6">Meet the Team</h2>
          <p class="text-gray-400 mb-8">The minds behind the platform.</p>
          <!-- Team Placeholders -->
           <div class="flex flex-wrap justify-center gap-6">
              <div class="bg-[#2A2A2A] px-6 py-8 rounded-xl border border-gray-700 w-64">
                 <div class="w-24 h-24 bg-gray-600 rounded-full mx-auto mb-4"></div>
                 <h4 class="font-bold text-lg">Jane Doe</h4>
                 <p class="text-[#d4a017] text-sm">CEO & Founder</p>
              </div>
               <div class="bg-[#2A2A2A] px-6 py-8 rounded-xl border border-gray-700 w-64">
                 <div class="w-24 h-24 bg-gray-600 rounded-full mx-auto mb-4"></div>
                 <h4 class="font-bold text-lg">John Smith</h4>
                 <p class="text-[#d4a017] text-sm">CTO</p>
              </div>
               <div class="bg-[#2A2A2A] px-6 py-8 rounded-xl border border-gray-700 w-64">
                 <div class="w-24 h-24 bg-gray-600 rounded-full mx-auto mb-4"></div>
                 <h4 class="font-bold text-lg">Mike Ross</h4>
                 <p class="text-[#d4a017] text-sm">Lead Developer</p>
              </div>
           </div>
        </div>
      </div>
    </div>
    <PageFooter />
  </div>
</template>

<script>
import PageFooter from '@/components/PageFooter.vue';

export default {
  name: "AboutView",
  components: {
    PageFooter
  }
};
</script>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
