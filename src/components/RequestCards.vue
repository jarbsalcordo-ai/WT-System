<template>
  <div class="w-full py-10 md:py-20 overflow-hidden">
    <!-- Collage Container -->
    <div class="relative w-full max-w-4xl mx-auto h-[450px] md:h-[600px] flex justify-center items-center transform scale-[0.85] sm:scale-[0.9] md:scale-100 origin-center">
      
      <!-- Phone 1 (Left - Back) -->
      <div class="absolute left-1/2 top-1/2 transform -translate-x-[calc(50%+140px)] -translate-y-1/2 rotate-[-12deg] w-[280px] h-[550px] shadow-2xl rounded-[2.5rem] bg-black border-[8px] border-[#d4a017] z-0 opacity-90 hover:z-20 hover:scale-105 transition-all duration-500 ease-out">
        <img 
          src="@/assets/images/mobile2.png" 
          alt="Shift Swap UI" 
          class="w-full h-full object-cover rounded-[2rem]"
        />
        <!-- Reflection/Gloss -->
        <div class="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-[2rem]"></div>
      </div>

      <!-- Phone 2 (Right - Back) -->
      <div class="absolute left-1/2 top-1/2 transform -translate-x-[calc(50%-140px)] -translate-y-[calc(50%-20px)] rotate-[12deg] w-[280px] h-[550px] shadow-2xl rounded-[2.5rem] bg-black border-[8px] border-[#d4a017] z-10 opacity-90 hover:z-20 hover:scale-105 transition-all duration-500 ease-out">
        <img 
          src="@/assets/images/mobile3.png" 
          alt="Vacation Leave UI" 
          class="w-full h-full object-cover rounded-[2rem]"
        />
         <div class="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-[2rem]"></div>
      </div>

      <!-- Phone 3 (Center - Front) -->
      <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[calc(50%+20px)] w-[290px] h-[580px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[3rem] bg-black border-[8px] border-[#d4a017] z-30 hover:scale-105 transition-transform duration-500 ease-out">
        <!-- Notch/Dynamic Island Placeholder -->
        <div class="absolute top-0 left-1/2 transform -translate-x-1/2 h-7 w-24 bg-black rounded-b-xl z-50"></div>
        
        <img 
          src="@/assets/images/mobile1.png" 
          alt="Dashboard UI" 
          class="w-full h-full object-cover rounded-[2.3rem]"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none rounded-[2.3rem]"></div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "RequestCards"
}
</script>

<style scoped>
/* Optional: Floating Animation */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}

</style>
