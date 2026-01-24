<template>
  <section class="py-20 bg-[#1F1F1F]">
    <div class="max-w-7xl mx-auto px-6">
      
      <!-- Card Container -->
      <div class="bg-[#F3EAD3] rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center relative overflow-hidden">
        
        <!-- Left Column: Illustration -->
        <div class="w-full md:w-1/2 flex justify-center md:justify-start relative z-10 mb-8 md:mb-0">
          <!-- Using a similar illustration from a free source since I can't extract the exact one -->
          <img 
            src="@/assets/images/howimages.png" 
            alt="How it works illustration" 
            class="max-w-xs md:max-w-md w-full h-auto object-contain transform md:translate-y-4"
          />
        </div>

        <!-- Right Column: Content -->
        <div class="w-full md:w-1/2 space-y-6 md:pl-10 z-10">
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            How It Works?
          </h2>
          
          <p class="text-gray-800 text-lg leading-relaxed">
            Record and calculate overtime automatically. Managing attendance, leave, shift swaps, overtime, and undertime has never been easier. The system guides employees and managers through a seamless workflow, ensuring accurate records and streamlined approvals.
          </p>

          <button class="mt-4 px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-full hover:bg-gray-900 hover:text-[#F3EAD3] transition-colors duration-300 uppercase tracking-wide text-sm">
            Learn More
          </button>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "HowItWorks"
}
</script>
