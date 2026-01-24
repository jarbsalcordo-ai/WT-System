<template>
  <div class="min-h-screen bg-[#1E1E1E] text-white font-poppins p-6 md:p-10">
    <header class="flex justify-between items-center mb-10">
      <div>
         <button @click="$router.push('/hr-dashboard')" class="flex items-center gap-2 hover:text-yellow-500 transition mb-2 text-sm text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Dashboard
         </button>
        <h1 class="text-3xl font-bold">My Payslips</h1>
        <p class="text-gray-400 text-sm">View and download your salary history</p>
      </div>
    </header>

    <div class="bg-[#252525] rounded-[2rem] border border-gray-700 overflow-hidden">
       <div class="p-8 border-b border-gray-700">
          <h2 class="text-xl font-bold flex items-center gap-2">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#d4a017]">
               <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
             </svg>
             Payslip History
          </h2>
       </div>
       
       <div class="overflow-x-auto">
          <table class="w-full">
             <thead class="bg-[#1F1F1F] text-gray-400 text-xs uppercase tracking-wider text-left">
                <tr>
                   <th class="px-8 py-4 font-medium">Period</th>
                   <th class="px-8 py-4 font-medium">Release Date</th>
                   <th class="px-8 py-4 font-medium">Net Pay</th>
                   <th class="px-8 py-4 font-medium text-right">Actions</th>
                </tr>
             </thead>
             <tbody class="divide-y divide-gray-700">
                <tr class="hover:bg-[#2A2A2A] transition">
                   <td class="px-8 py-4">Jan 01 - Jan 15, 2026</td>
                   <td class="px-8 py-4 text-gray-400">Jan 16, 2026</td>
                   <td class="px-8 py-4 font-bold text-green-500">₱ 15,450.00</td>
                   <td class="px-8 py-4 text-right">
                      <button class="bg-[#d4a017] text-black text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#b88b14] transition">
                         Download PDF
                      </button>
                   </td>
                </tr>
                 <tr class="hover:bg-[#2A2A2A] transition">
                   <td class="px-8 py-4">Dec 16 - Dec 31, 2025</td>
                   <td class="px-8 py-4 text-gray-400">Jan 01, 2026</td>
                   <td class="px-8 py-4 font-bold text-green-500">₱ 18,200.00</td>
                   <td class="px-8 py-4 text-right">
                      <button class="bg-[#d4a017] text-black text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#b88b14] transition">
                         Download PDF
                      </button>
                   </td>
                </tr>
             </tbody>
          </table>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HRPayslips"
}
</script>
