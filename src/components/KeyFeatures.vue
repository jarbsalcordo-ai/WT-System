<template>
  <section class="py-20 bg-[#1F1F1F]">
    <div class="max-w-7xl mx-auto px-6">
      
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-white tracking-wide">Key Features</h2>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- Feature 1: Shift Swapping -->
        <div class="bg-white rounded-3xl p-8 flex flex-col items-center text-center  hover:transform hover:-translate-y-2 transition-transform duration-300">
          <div class="w-16 h-16 mb-6 text-[#d4a017]">
             <!-- Recycle/Swap Icon -->
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-full h-full">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
             </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Shift Swapping</h3>
          <p class="text-gray-600 leading-relaxed">
            Enable employees to swap shifts quickly without manual approval.
          </p>
        </div>

        <!-- Feature 2: Leave Management -->
        <div class="bg-white rounded-3xl p-8 flex flex-col items-center text-center  hover:transform hover:-translate-y-2 transition-transform duration-300">
          <div class="w-16 h-16 mb-6 text-[#d4a017]">
             <!-- Calendar Check Icon -->
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-full h-full">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
             </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Leave Management</h3>
          <p class="text-gray-600 leading-relaxed">
            Submit, approve, and track leave efficiently.
          </p>
        </div>

        <!-- Feature 3: Overtime Tracking -->
        <div class="bg-white rounded-3xl p-8 flex flex-col items-center text-center  hover:transform hover:-translate-y-2 transition-transform duration-300">
           <div class="w-16 h-16 mb-6 text-[#d4a017]">
             <!-- User Clock Icon (Custom combination) -->
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-full h-full">
               <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
               <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5" transform="scale(0.4) translate(30, 0)" /> <!-- Simplified representation -->
               <circle cx="18" cy="18" r="4" class="fill-white stroke-[#d4a017] stroke-2" />
               <path stroke-linecap="round" stroke-linejoin="round" d="M18 16v2l1 1" class="stroke-[#d4a017]" />
             </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Overtime Tracking</h3>
          <p class="text-gray-600 leading-relaxed">
            Record and calculate overtime automatically.
          </p>
        </div>

        <!-- Feature 4: Undertime / Early Exit -->
        <div class="bg-white rounded-3xl p-8 flex flex-col items-center text-center  hover:transform hover:-translate-y-2 transition-transform duration-300">
           <div class="w-16 h-16 mb-6 text-[#d4a017]">
             <!-- Clock Icon -->
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-full h-full">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Undertime/ Early Exit form</h3>
          <p class="text-gray-600 leading-relaxed">
            Track undertime and maintain accurate records.
          </p>
        </div>

        <!-- Feature 5: Attendance Monitoring -->
        <div class="bg-white rounded-3xl p-8 flex flex-col items-center text-center  hover:transform hover:-translate-y-2 transition-transform duration-300">
           <div class="w-16 h-16 mb-6 text-[#d4a017]">
             <!-- Layers/Attendance Icon -->
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-full h-full">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /> <!-- Info/Monitor generic -->
                <!-- Or easier "Files" -->
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
             </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Attendance Monitoring</h3>
          <p class="text-gray-600 leading-relaxed">
            Managers can see attendance updates instantly.
          </p>
        </div>

        <!-- Feature 6: Report & Analysis -->
        <div class="bg-white rounded-3xl p-8 flex flex-col items-center text-center  hover:transform hover:-translate-y-2 transition-transform duration-300">
           <div class="w-16 h-16 mb-6 text-[#d4a017]">
             <!-- Clipboard Icon -->
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-full h-full">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
             </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Report & Analysis</h3>
          <p class="text-gray-600 leading-relaxed">
            Generate detailed reports and analyze workforce data.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "KeyFeatures"
}
</script>
