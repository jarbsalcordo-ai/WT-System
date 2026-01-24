<template>
  <footer class="bg-[#1F1F1F] text-white pt-16 pb-8 border-t border-white/5">
    <div class="max-w-7xl mx-auto px-6">
      
      <!-- Top Section: Logo & Navigation -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        
        <!-- Logo Area -->
        <div class="flex flex-col items-center md:items-start group cursor-pointer">
          <div class="mb-2">
            <img src="@/assets/images/sitelogo.png" alt="WatchTower Logo" class="h-20 w-auto" />
          </div>
          <span class="text-[#d4a017] font-bold tracking-wider text-sm">WatchTower Virtual Guards</span>
        </div>

        <!-- Navigation Pills -->
        <nav class="flex flex-wrap justify-center gap-4">
          <a href="#" class="bg-[#cba028] hover:bg-[#b88b14] text-black font-semibold px-8 py-2.5 rounded-full transition-transform hover:scale-105">Home</a>
          <a href="#" class="bg-[#cba028] hover:bg-[#b88b14] text-black font-semibold px-8 py-2.5 rounded-full transition-transform hover:scale-105">Services</a>
          <a href="#" class="bg-[#cba028] hover:bg-[#b88b14] text-black font-semibold px-8 py-2.5 rounded-full transition-transform hover:scale-105">Company</a>
          <a href="#" class="bg-[#cba028] hover:bg-[#b88b14] text-black font-semibold px-8 py-2.5 rounded-full transition-transform hover:scale-105">My Account</a>
        </nav>
      </div>

      <!-- Divider -->
      <div class="h-px w-full bg-gray-700 mb-8"></div>

      <!-- Bottom Section: Copyright & Socials -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <p>All rights reserved 2026. Watch Tower Virtual Guards</p>
        
        <div class="flex items-center gap-4">
          <!-- Facebook Icon -->
          <a href="#" class="text-[#d4a017] hover:text-[#ffd700] transition-colors">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
            </svg>
          </a>
          
          <!-- Google Icon -->
          <a href="#" class="text-[#d4a017] hover:text-[#ffd700] transition-colors">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: "PageFooter"
}
</script>
