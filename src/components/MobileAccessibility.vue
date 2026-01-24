<template>
  <section class="py-24 bg-[#1F1F1F]">
    <div class="max-w-7xl mx-auto px-6">
      
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-white tracking-wide">Mobile & Accessibility</h2>
      </div>

      <!-- Phones Display -->
      <div class="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-16 mb-16 relative">
        
        <!-- Phone 1 (Left) -->
        <div class="phone-frame transform md:translate-y-0 hover:translate-y-[-10px] transition-transform duration-500">
           <img 
             src="@/assets/images/mobile1.png" 
             alt="Mobile Screen 1" 
             class="w-full h-full object-cover rounded-[2rem]"
           />
        </div>

        <!-- Phone 2 (Center) -->
        <div class="phone-frame z-10 transform md:translate-y-12 hover:translate-y-2 transition-transform duration-500 shadow-[0_0_50px_rgba(212,160,23,0.15)]">
           <img 
             src="@/assets/images/mobile2.png" 
             alt="Mobile Screen 2" 
             class="w-full h-full object-cover rounded-[2rem]"
           />
        </div>

        <!-- Phone 3 (Right) -->
        <div class="phone-frame transform md:translate-y-0 hover:translate-y-[-10px] transition-transform duration-500">
           <img 
             src="@/assets/images/mobile3.png" 
             alt="Mobile Screen 3" 
             class="w-full h-full object-cover rounded-[2rem]"
           />
        </div>
      </div>

      <!-- Description Text -->
      <div class="max-w-4xl mx-auto text-center">
        <p class="text-gray-300 text-lg leading-relaxed">
          The system is designed for modern workforces on the move. Employees can submit leave, shift swap, overtime, and undertime forms directly from their mobile devices—no need to be at a desk. Managers can review and approve requests on the go, ensuring attendance records are always up-to-date.
        </p>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "MobileAccessibility"
}
</script>

<style scoped>
.phone-frame {
  width: 280px;
  height: 580px;
  background: #121212;
  border-radius: 3rem;
  padding: 12px;
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.5),
    inset 0 0 0 2px #333,
    inset 0 0 0 4px #000;
  position: relative;
  overflow: hidden;
}

/* Notch visualization */
.phone-frame::before {
  content: '';
  position: absolute;
  top: 12px; /* Pull it slightly into the padding area */
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 25px;
  background: #000;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  z-index: 20;
}
</style>
