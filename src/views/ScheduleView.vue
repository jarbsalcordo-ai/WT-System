<template>
  <div class="min-h-screen bg-[#1F1F1F] font-poppins text-white pt-32 pb-20 px-6 md:px-20 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div class="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#d4a017] rounded-full mix-blend-overlay filter blur-[120px] opacity-20 animate-pulse"></div>
        <div class="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900 rounded-full mix-blend-overlay filter blur-[100px] opacity-20 animate-blob"></div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10 animate-fade-in-up">
        <!-- Header -->
        <div class="text-center mb-16">
            <h1 class="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
                Weekly <span class="text-[#d4a017]">Schedule</span>
            </h1>
            <p class="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Stay updated with the latest shift assignments for the OJT team.
            </p>
            <div class="w-24 h-1 bg-[#d4a017] mx-auto mt-8 rounded-full"></div>
        </div>

        <!-- Schedule Table -->
        <div class="bg-[#252525]/80 backdrop-blur-xl rounded-[2.5rem] border border-gray-700/50 shadow-2xl overflow-hidden hover:border-[#d4a017]/30 transition-all duration-500">
            <!-- Table Header -->
            <div class="p-8 border-b border-gray-700 bg-[#2A2A2A]/50 flex flex-col md:flex-row justify-between items-center gap-4">
               <div class="flex items-center gap-4">
                   <div class="p-3 bg-[#d4a017]/20 rounded-2xl">
                       <svg class="w-8 h-8 text-[#d4a017]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                       </svg>
                   </div>
                   <div>
                       <h3 class="text-2xl font-bold text-white">Public View</h3>
                       <p class="text-sm text-gray-400">Week of Jan 22 - Jan 28, 2026</p>
                   </div>
               </div>
               
               <div class="flex gap-2">
                   <span class="px-4 py-2 bg-[#1F1F1F] rounded-lg border border-gray-600 text-xs text-gray-400 flex items-center gap-2">
                       <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Live Schedule
                   </span>
               </div>
            </div>
            
            <!-- Scrollable Table Area -->
            <div class="overflow-x-auto custom-scrollbar">
               <table class="w-full text-center border-collapse">
                  <thead>
                     <tr class="bg-gradient-to-r from-blue-900 to-blue-800 text-white text-sm uppercase tracking-wider font-bold">
                        <th class="px-8 py-6 text-left min-w-[200px] sticky left-0 z-20 bg-blue-900 shadow-xl border-r border-blue-800">OJT Team</th>
                        <th class="px-6 py-6 min-w-[140px]">Monday</th>
                        <th class="px-6 py-6 min-w-[140px]">Tuesday</th>
                        <th class="px-6 py-6 min-w-[140px]">Wednesday</th>
                        <th class="px-6 py-6 min-w-[140px]">Thursday</th>
                        <th class="px-6 py-6 min-w-[140px]">Friday</th>
                        <th class="px-6 py-6 min-w-[140px]">Saturday</th>
                        <th class="px-6 py-6 min-w-[140px]">Sunday</th>
                     </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-700/50 bg-[#1F1F1F]/50">
                     <tr v-for="(schedule, index) in weeklySchedule" :key="index" class="hover:bg-[#2A2A2A] transition duration-300 group">
                        <td class="px-8 py-6 text-left font-bold text-white sticky left-0 bg-[#252525] group-hover:bg-[#2A2A2A] transition duration-300 z-10 border-r border-gray-700 shadow-lg">{{ schedule.names }}</td>
                        <td :class="['px-6 py-6 text-sm font-medium', getScheduleClass(schedule.mon)]">{{ schedule.mon }}</td>
                        <td :class="['px-6 py-6 text-sm font-medium', getScheduleClass(schedule.tue)]">{{ schedule.tue }}</td>
                        <td :class="['px-6 py-6 text-sm font-medium', getScheduleClass(schedule.wed)]">{{ schedule.wed }}</td>
                        <td :class="['px-6 py-6 text-sm font-medium', getScheduleClass(schedule.thu)]">{{ schedule.thu }}</td>
                        <td :class="['px-6 py-6 text-sm font-medium', getScheduleClass(schedule.fri)]">{{ schedule.fri }}</td>
                        <td :class="['px-6 py-6 text-sm font-medium', getScheduleClass(schedule.sat)]">{{ schedule.sat }}</td>
                        <td :class="['px-6 py-6 text-sm font-medium', getScheduleClass(schedule.sun)]">{{ schedule.sun }}</td>
                     </tr>
                  </tbody>
               </table>
            </div>
        </div>
        
        <!-- Legend Grid -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10 max-w-4xl mx-auto">
             <div class="flex items-center gap-3 text-sm text-gray-300 bg-[#252525] px-6 py-4 rounded-xl border border-gray-700 hover:border-green-500/50 transition duration-300 shadow-lg">
                <span class="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span> 
                <span>8 AM - 4 PM</span>
             </div>
             <div class="flex items-center gap-3 text-sm text-gray-300 bg-[#252525] px-6 py-4 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition duration-300 shadow-lg">
                <span class="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span> 
                <span>4 PM - 12 AM</span>
             </div>
             <div class="flex items-center gap-3 text-sm text-gray-300 bg-[#252525] px-6 py-4 rounded-xl border border-gray-700 hover:border-blue-500/50 transition duration-300 shadow-lg">
                <span class="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span> 
                <span>12 AM - 8 AM</span>
             </div>
             <div class="flex items-center gap-3 text-sm text-gray-300 bg-[#252525] px-6 py-4 rounded-xl border border-gray-700 hover:border-gray-500/50 transition duration-300 shadow-lg">
                <span class="w-3 h-3 rounded-full bg-gray-500 shadow-[0_0_10px_rgba(107,114,128,0.5)]"></span> 
                <span>OFF Duty</span>
             </div>
        </div>

    </div>
    
    <PageFooter class="mt-20" />
  </div>
</template>

<script>
import PageFooter from '@/components/PageFooter.vue';

export default {
  name: "ScheduleView",
  components: {
    PageFooter
  },
  data() {
    return {
      weeklySchedule: [
        { names: 'Clint, Renzie', mon: '8 AM - 4 PM', tue: '8 AM - 4 PM', wed: '8 AM - 4 PM', thu: '8 AM - 4 PM', fri: '8 AM - 4 PM', sat: 'OFF', sun: 'OFF' },
        { names: 'Ken B, Raque', mon: '12 AM - 8 AM', tue: 'OFF', wed: 'OFF', thu: '4 PM - 12 AM', fri: '4 PM - 12 AM', sat: '4 PM - 12 AM', sun: '12 AM - 8 AM' },
        { names: 'Marc, Steven', mon: '4 PM - 12 AM', tue: '4 PM - 12 AM', wed: '4 PM - 12 AM', thu: 'OFF', fri: 'OFF', sat: '8 AM - 4 PM', sun: '8 AM - 4 PM' },
        { names: 'Edgar, Ken C, Justin', mon: 'OFF', tue: '12 AM - 8 AM', wed: '12 AM - 8 AM', thu: '12 AM - 8 AM', fri: '12 AM - 8 AM', sat: '12 AM - 8 AM', sun: 'OFF' },
        { names: 'Matthieu', mon: '4 PM - 12 AM', tue: '4 PM - 12 AM', wed: '4 PM - 12 AM', thu: '4 PM - 12 AM', fri: 'OFF', sat: 'OFF', sun: '4 PM - 12 AM' },
        { names: 'Eric', mon: '12 AM - 8 AM', tue: 'OFF', wed: 'OFF', thu: '8 AM - 4 PM', fri: '4 PM - 12 AM', sat: '4 PM - 12 AM', sun: '4 PM - 12 AM' },
      ]
    };
  },
  methods: {
    getScheduleClass(schedule) {
       if (schedule === 'OFF') return 'text-gray-500 font-bold bg-[#333]/30 rounded-lg inline-block px-3 py-1';
       if (schedule.includes('8 AM')) return 'text-green-400 font-semibold';
       if (schedule.includes('4 PM')) return 'text-yellow-400 font-semibold';
       if (schedule.includes('12 AM')) return 'text-blue-400 font-semibold';
       return 'text-white';
    }
  }
};
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  height: 8px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: #1F1F1F;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #444;
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #d4a017;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in-up {
    animation: fadeIn 0.8s ease-out forwards;
}

@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

.animate-blob {
  animation: blob 7s infinite;
}
</style>
