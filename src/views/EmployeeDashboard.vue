<template>
  <div class="min-h-screen bg-[#1E1E1E] text-white font-poppins p-6 md:p-10">
    <!-- Header -->
    <header class="flex justify-between items-center mb-8">
      <div>
        <h1 class="text-3xl font-bold">Welcome back, {{ userData.first_name }}</h1>
        <p class="text-gray-400 text-sm">Manage your schedule requests and approvals</p>
      </div>
      <div class="flex items-center space-x-6">
        <button class="relative text-gray-400 hover:text-yellow-500 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
          <span class="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full border-2 border-[#1E1E1E]"></span>
        </button>
        <div @click="showProfileModal = true" class="flex items-center space-x-3 cursor-pointer bg-[#2A2A2A] rounded-full px-4 py-2 border border-gray-700 hover:bg-[#333] transition">
          <div class="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold text-sm">{{ (userData.first_name?.[0] || 'U') + (userData.last_name?.[0] || '') }}</div>
          <span class="font-medium text-sm hidden md:block">{{ userData.first_name }} {{ userData.last_name }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
    </header>

    <!-- Profile Modal Overlay -->
    <div v-if="showProfileModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-end transition-opacity">
       <!-- Modal Content -->
       <div class="bg-[#2A2A2A] w-full max-w-md h-full shadow-2xl p-8 overflow-y-auto animate-slide-in-right relative rounded-l-[2rem]">
         
         <div class="flex justify-between items-center mb-10">
            <h2 class="text-xl font-bold text-[#d4a017] flex items-center gap-2">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                 <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
               </svg>
               Account Details
            </h2>
            <button @click="showProfileModal = false" class="text-gray-400 hover:text-white transition">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
               </svg>
            </button>
         </div>

         <div class="flex flex-col items-center mb-8">
            <div class="w-24 h-24 rounded-full bg-red-900 mb-4 overflow-hidden border-2 border-[#d4a017]">
               <!-- Placeholder Image -->
               <img src="https://i.pravatar.cc/150?u=raque" alt="Profile" class="w-full h-full object-cover">
            </div>
            <h3 class="text-xl font-bold">{{ userData.first_name }} {{ userData.last_name }}</h3>
            <p class="text-[#d4a017] text-sm font-medium">{{ userData.role }}</p>
            <p class="text-yellow-500/60 text-xs mt-1">ID: {{ userData.company_id }}</p>
         </div>

         <div class="space-y-6">
            <div class="border-b border-gray-700 pb-2">
               <p class="text-[#d4a017] text-sm mb-1">Email Address</p>
               <p class="text-white">{{ userData.email }}</p>
            </div>
             <div class="border-b border-gray-700 pb-2">
               <p class="text-[#d4a017] text-sm mb-1">Company ID</p>
               <p class="text-white">{{ userData.company_id }}</p>
            </div>
             <div class="border-b border-gray-700 pb-2">
               <p class="text-[#d4a017] text-sm mb-1">Role / Position</p>
               <p class="text-white">{{ userData.role }}</p>
            </div>
             <div class="border-b border-gray-700 pb-2">
               <p class="text-[#d4a017] text-sm mb-1">Department</p>
               <p class="text-white">{{ userData.department }}</p>
            </div>
         </div>

         <div class="mt-12 flex justify-center">
            <button @click="handleLogout" class="flex items-center gap-2 border border-red-500/50 text-red-500 hover:bg-red-500/10 px-8 py-3 rounded-lg transition width-full justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
               </svg>
               Log out
            </button>
         </div>

       </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      <!-- Pending Requests -->
      <div class="bg-[#252525] border border-yellow-500/50 rounded-2xl p-6 relative overflow-hidden group hover:border-yellow-500 transition-colors">
        <div class="flex justify-between items-start">
          <div>
            <p class="text-gray-400 text-sm mb-2">Pending Requests</p>
            <h3 class="text-3xl font-bold">{{ stats.pending }}</h3>
          </div>
          <div class="p-2 bg-yellow-500/10 rounded-lg text-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Approved -->
      <div class="bg-[#252525] border border-green-500/30 rounded-2xl p-6 relative overflow-hidden">
        <div class="flex justify-between items-start">
          <div>
             <p class="text-gray-400 text-sm mb-2">Approved</p>
             <h3 class="text-3xl font-bold">{{ stats.approved }}</h3>
          </div>
          <div class="p-2 bg-green-500/10 rounded-lg text-green-500">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
               <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>
          </div>
        </div>
      </div>

       <!-- Total Hours -->
      <div class="bg-[#252525] border border-gray-700 hover:border-yellow-500/50 rounded-2xl p-6 relative overflow-hidden transition-colors">
        <div class="flex justify-between items-start">
          <div>
             <p class="text-gray-400 text-sm mb-2">Total Hours (This Month)</p>
             <h3 class="text-3xl font-bold">{{ stats.totalHours }}</h3>
          </div>
          <div class="p-2 bg-gray-700/30 rounded-lg text-white">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>
          </div>
        </div>
      </div>

      <!-- Current Cutoff -->
      <div class="bg-[#252525] border border-gray-700 hover:border-yellow-500/50 rounded-2xl p-6 relative overflow-hidden transition-colors">
        <div class="flex justify-between items-start">
            <div>
               <p class="text-gray-400 text-sm mb-2">Current Cutoff</p>
               <h3 class="text-2xl font-bold">{{ stats.currentCutoff }}</h3>
            </div>
            <div class="p-2 bg-gray-700/30 rounded-lg text-white">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
               </svg>
            </div>
        </div>
      </div>
    </div>

    <!-- Navigation Tabs -->
    <div class="bg-[#2A2A2A] p-2 rounded-2xl inline-flex space-x-2 mb-8 overflow-x-auto max-w-full">
      <button 
        v-for="tab in ['Request Forms', 'Payslips', 'Weekly Schedules', 'Request History', 'Notifications']" 
        :key="tab"
        @click="activeMainTab = tab"
        :class="[
          'flex items-center space-x-2 px-6 py-3 rounded-xl transition',
          activeMainTab === tab ? 'bg-[#1F1F1F] text-yellow-500 border border-yellow-500/30 shadow-lg' : 'text-gray-400 hover:text-white hover:bg-[#333]'
        ]"
      >
        <!-- Simplify Icons - Just basic circle for other tabs to save space/complexity in diff -->
         <span class="font-medium whitespace-nowrap">{{ tab }}</span>
      </button>
    </div>

    <!-- Main Content & Sidebar -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      <!-- Left: Request Forms -->
      <div v-if="activeMainTab === 'Request Forms'" class="lg:col-span-2 bg-[#252525] rounded-[2rem] p-8 border border-gray-700">
        <!-- Inner Tabs -->
        <div class="flex space-x-8 border-b border-gray-700 pb-4 mb-8 overflow-x-auto">
           <button 
             v-for="formTab in ['Shift Swap Request', 'Leave Request', 'Overtime Request', 'Undertime Request']"
             :key="formTab"
             @click="activeFormTab = formTab"
             :class="[
               'pb-2 border-b-2 transition flex items-center space-x-2 whitespace-nowrap',
               activeFormTab === formTab ? 'border-yellow-500 text-yellow-500 font-medium' : 'border-transparent text-gray-400 hover:text-white'
             ]"
           >
             <span>{{ formTab }}</span>
           </button>
        </div>

        <h2 class="text-xl font-bold mb-6">Schedule {{ activeFormTab }}</h2>

        <!-- Form Fields -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
           <div class="space-y-2">
             <label class="text-xs text-gray-400 uppercase tracking-wider">Name:</label>
             <input type="text" v-model="formData.name" class="w-full bg-[#333] border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition" />
           </div>
           
           <div class="space-y-2">
             <label class="text-xs text-gray-400 uppercase tracking-wider">Date Filed:</label>
             <input type="date" v-model="formData.dateFiled" class="w-full bg-[#333] border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition" />
           </div>

           <div class="space-y-2">
             <label class="text-xs text-gray-400 uppercase tracking-wider">Position:</label>
             <input type="text" v-model="formData.position" class="w-full bg-[#333] border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition" />
           </div>

           <div class="space-y-2">
             <label class="text-xs text-gray-400 uppercase tracking-wider">Department:</label>
             <input type="text" v-model="formData.department" class="w-full bg-[#333] border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition" />
           </div>
           
           <!-- Dynamic Form Fields -->
           <component :is="activeFormTabComponent" v-model="formData" />

           <!-- Reason Field (Always visible) -->
           <div class="md:col-span-2 space-y-2 mt-6">
             <label class="text-xs text-gray-400 uppercase tracking-wider">Reason:</label>
             <textarea v-model="formData.reason" rows="4" class="w-full bg-[#333] border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition resize-none"></textarea>
           </div>
        </div>

        <div class="flex justify-end">
          <button @click="handleRequestSubmit(activeFormTab)" class="bg-[#d4a017] hover:bg-[#b88b14] text-black font-bold py-3 px-8 rounded-xl transition shadow-lg transform hover:scale-105">
            Submit Request
          </button>
        </div>
      </div>

      <!-- Payslips Placeholder -->
      <div v-if="activeMainTab === 'Payslips'" class="lg:col-span-3 bg-[#252525] rounded-[2rem] p-8 border border-gray-700 flex items-center justify-center min-h-[400px]">
        <div class="text-center">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 text-gray-500 mx-auto mb-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
           </svg>
           <h3 class="text-xl font-bold text-white mb-2">Payslips</h3>
           <p class="text-gray-400">View and download your payslips here.</p>
           <p class="text-yellow-500 mt-4 text-sm font-medium">Coming Soon</p>
        </div>
      </div>

      <!-- Weekly Schedules -->
      <div v-if="activeMainTab === 'Weekly Schedules'" class="lg:col-span-3 space-y-6 animate-fade-in">
         <div class="bg-[#252525] rounded-[2rem] border border-gray-700 overflow-hidden">
            <div class="p-6 border-b border-gray-700 bg-[#333] flex justify-between items-center">
               <h3 class="text-xl font-bold text-white">Weekly Schedule</h3>
               <div class="text-sm text-gray-400">Week of Jan 22 - Jan 28, 2026</div>
            </div>
            
            <div class="overflow-x-auto">
               <table class="w-full text-center">
                  <thead>
                     <tr class="bg-blue-600 text-white text-sm uppercase tracking-wider font-bold">
                        <th class="px-6 py-4 text-left min-w-[150px] sticky left-0 z-10 bg-blue-600">OJT</th>
                        <th class="px-4 py-4 min-w-[120px]">Monday</th>
                        <th class="px-4 py-4 min-w-[120px]">Tuesday</th>
                        <th class="px-4 py-4 min-w-[120px]">Wednesday</th>
                        <th class="px-4 py-4 min-w-[120px]">Thursday</th>
                        <th class="px-4 py-4 min-w-[120px]">Friday</th>
                        <th class="px-4 py-4 min-w-[120px]">Saturday</th>
                        <th class="px-4 py-4 min-w-[120px]">Sunday</th>
                     </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-700">
                     <tr v-for="(schedule, index) in weeklySchedule" :key="index" class="hover:bg-[#2A2A2A] transition text-sm">
                        <td class="px-6 py-4 text-left font-bold text-white sticky left-0 bg-[#252525] z-10 border-r border-gray-700">{{ schedule.names }}</td>
                        <td :class="['px-4 py-4', getScheduleClass(schedule.mon)]">{{ schedule.mon }}</td>
                        <td :class="['px-4 py-4', getScheduleClass(schedule.tue)]">{{ schedule.tue }}</td>
                        <td :class="['px-4 py-4', getScheduleClass(schedule.wed)]">{{ schedule.wed }}</td>
                        <td :class="['px-4 py-4', getScheduleClass(schedule.thu)]">{{ schedule.thu }}</td>
                        <td :class="['px-4 py-4', getScheduleClass(schedule.fri)]">{{ schedule.fri }}</td>
                        <td :class="['px-4 py-4', getScheduleClass(schedule.sat)]">{{ schedule.sat }}</td>
                        <td :class="['px-4 py-4', getScheduleClass(schedule.sun)]">{{ schedule.sun }}</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
         
         <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
             <div class="flex items-center gap-2 text-sm text-gray-400">
                <span class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500"></span> 8 AM - 4 PM
             </div>
             <div class="flex items-center gap-2 text-sm text-gray-400">
                <span class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500"></span> 4 PM - 12 AM
             </div>
             <div class="flex items-center gap-2 text-sm text-gray-400">
                <span class="w-3 h-3 rounded-full bg-blue-500/20 border border-blue-500"></span> 12 AM - 8 AM
             </div>
             <div class="flex items-center gap-2 text-sm text-gray-400">
                <span class="w-3 h-3 rounded-full bg-gray-600"></span> OFF
             </div>
         </div>
      </div>

      <!-- Request History -->
      <div v-if="activeMainTab === 'Request History'" class="lg:col-span-3">
         <RequestHistoryTab :requests="requests" />
      </div>

      <!-- Notifications -->
      <div v-if="activeMainTab === 'Notifications'" class="lg:col-span-3 bg-[#252525] rounded-[2rem] p-8 border border-gray-700 h-[600px] overflow-y-auto">
         <h2 class="text-xl font-bold mb-6 flex items-center gap-2">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-yellow-500">
             <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
           </svg>
           Notifications
         </h2>
         
         <div v-if="notifications.length === 0" class="text-center py-20">
           <p class="text-gray-500">No new notifications.</p>
         </div>

         <div v-else class="space-y-4">
            <div v-for="notif in notifications" :key="notif.id" :class="['p-5 rounded-xl border-l-4 flex items-start transition hover:bg-[#3D3318]/50', notif.type === 'success' ? 'bg-[#3D3318] border-green-500' : 'bg-[#3D3318] border-red-500']">
                <div :class="['p-2 rounded-full mr-4', notif.type === 'success' ? 'bg-green-500/20' : 'bg-red-500/20']">
                   <svg v-if="notif.type === 'success'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" :class="['w-5 h-5', notif.type === 'success' ? 'text-green-500' : 'text-red-500']">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-red-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <p class="text-base text-yellow-100 font-medium">{{ notif.message }}</p>
                  <p class="text-sm text-yellow-500/70 mt-1">{{ notif.time }}</p>
                </div>
            </div>
         </div>
      </div>

      <!-- Right: Sidebar (Recent Requests & Notifications) -->
      <div v-if="!['Request History', 'Notifications', 'Payslips', 'Weekly Schedules'].includes(activeMainTab)" class="space-y-8">
        
        <!-- Recent Requests -->
        <div class="bg-[#252525] rounded-[2rem] p-6 border border-gray-700 h-[480px] overflow-y-auto">
           <h3 class="text-lg font-bold mb-6 flex items-center">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-yellow-500 mr-2">
               <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>
             Recent Requests
           </h3>

           <div v-for="req in requests" :key="req.id" class="relative pl-6 pb-8 border-l border-gray-600 last:border-0 last:pb-0">
              <span class="absolute top-0 left-[-5px] w-2.5 h-2.5 bg-yellow-500 rounded-full"></span>
              <div class="bg-[#333] p-4 rounded-xl border border-gray-600 hover:border-yellow-500/50 transition duration-300">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-bold text-white">{{ req.type }}</h4>
                   <span :class="['text-xs px-2 py-1 rounded-full border', getStatusColor(req.status)]">{{ req.status }}</span>
                </div>
                <p class="text-sm text-gray-400 mb-2">{{ req.details }}</p>
                <div class="flex items-center text-xs text-gray-500 space-x-3">
                   <span>{{ req.date }}</span>
                   <span v-if="req.meta" class="w-1 h-1 bg-gray-500 rounded-full"></span>
                   <span v-if="req.meta">{{ req.meta }}</span>
                </div>
              </div>
           </div>
        </div>

        <!-- Notifications -->
         <div class="bg-[#252525] rounded-[2rem] p-6 border border-gray-700 h-[250px] overflow-y-auto">
           <h3 class="text-lg font-bold mb-4 flex items-center">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-yellow-500 mr-2">
               <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
             </svg>
             Notifications
           </h3>

           <div class="space-y-4">
              <div v-for="notif in notifications" :key="notif.id" :class="['p-4 rounded-xl border-l-4 flex items-start', notif.type === 'success' ? 'bg-[#3D3318] border-green-500' : 'bg-[#3D3318] border-red-500']">
                  <div :class="['p-1 rounded-full mr-3 mt-1', notif.type === 'success' ? 'bg-green-500/20' : 'bg-red-500/20']">
                     <svg v-if="notif.type === 'success'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" :class="['w-4 h-4', notif.type === 'success' ? 'text-green-500' : 'text-red-500']">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-red-500">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-yellow-100">{{ notif.message }}</p>
                    <p class="text-xs text-yellow-500/70 mt-1">{{ notif.time }}</p>
                  </div>
              </div>
           </div>
         </div>

      </div>
    </div>

    <!-- Logout Confirmation Modal -->
    <div v-if="showLogoutModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm z-[70] flex items-center justify-center p-4">
        <div class="bg-[#2A2A2A] w-full max-w-sm rounded-2xl shadow-2xl border border-gray-700 p-8 text-center animate-zoom-in">
            <div class="w-16 h-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12" />
                </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Confirm Logout</h3>
            <p class="text-gray-400 mb-8 leading-relaxed">Are you sure you want to log out?</p>
            <div class="flex gap-3">
                <button @click="showLogoutModal = false" class="flex-1 py-3 bg-[#374151] hover:bg-[#4b5563] text-white rounded-xl transition font-medium">Cancel</button>
                <button @click="confirmLogout" class="flex-1 py-3 bg-green-500 hover:bg-green-400 text-black font-bold rounded-xl transition shadow-lg">Yes, Log out</button>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
// Return to using Form Sub-components directly
import LeaveRequest from '@/components/dashboard/forms/LeaveRequest.vue';
import OvertimeRequest from '@/components/dashboard/forms/OvertimeRequest.vue';
import SwapRequest from '@/components/dashboard/forms/SwapRequest.vue';
import UndertimeRequest from '@/components/dashboard/forms/UndertimeRequest.vue';
import RequestHistoryTab from '@/components/dashboard/tabs/RequestHistoryTab.vue';

export default {
  name: "EmployeeDashboard",
  components: {
    SwapRequest,
    LeaveRequest,
    OvertimeRequest,
    UndertimeRequest,
    RequestHistoryTab
  },
  data() {
    return {
      activeMainTab: 'Request Forms',
      activeFormTab: 'Shift Swap Request', // Sync with DB Enum
      userData: {
        first_name: '',
        last_name: '',
        company_id: '',
        role: '',
        email: '',
        department: ''
      },
      stats: {
        pending: 0,
        approved: 0,
        totalHours: 0,
        currentCutoff: 'Jan 16-30'
      },
      formData: {
        name: '',
        dateFiled: '',
        position: '',
        department: '',
        swapDateFrom: '',
        swapDateTo: '',
        noOfDays: '',
        reason: '',
        leaveDate: '',
        leaveType: '',
        overtimeDate: '',
        overtimeHours: '',
        undertimeDate: '',
        undertimeHours: ''
      },
      requests: [],
      notifications: [],
      isLoading: false,
      showProfileModal: false,
      weeklySchedule: [],
      showLogoutModal: false
    };
  },
  computed: {
    // Restored Logic
    activeFormTabComponent() {
      switch(this.activeFormTab) {
        case 'Shift Swap Request': return 'SwapRequest';
        case 'Leave Request': return 'LeaveRequest';
        case 'Overtime Request': return 'OvertimeRequest';
        case 'Undertime Request': return 'UndertimeRequest';
        default: return 'SwapRequest';
      }
    }
  },
  mounted() {
    this.fetchDashboardData();
  },
  methods: {
    handleLogout() {
      this.showLogoutModal = true;
      this.showProfileModal = false;
    },
    confirmLogout() {
       localStorage.removeItem('token');
       localStorage.removeItem('user');
       this.$router.push('/login');
    },
    async fetchDashboardData() {
      // Simulate API call
      this.isLoading = true;
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
        
        // Fetch Real Data
        const userStr = localStorage.getItem('user');
        if (!userStr) throw new Error("No user found");
        const user = JSON.parse(userStr);
        this.userData = user;
        this.formData.name = `${user.first_name} ${user.last_name}`;
        this.formData.position = user.role || 'Employee';
        this.formData.department = user.department || 'N/A';
        this.formData.dateFiled = new Date().toISOString().split('T')[0];

        // 1. Fetch Requests
        const reqResponse = await fetch(`http://localhost:3000/requests?userId=${user.id}`);
        const reqData = await reqResponse.json();
        
        this.requests = reqData.map(r => ({
            id: r.id,
            type: r.type,
            status: r.status,
            dh_status: r.dh_status,
            hr_status: r.hr_status,
            om_status: r.om_status,
            dh_approver: r.dh_approved_by,
            hr_approver: r.hr_approved_by,
            om_approver: r.om_approved_by,
            details: r.details,
            date: new Date(r.created_at).toLocaleDateString(),
            meta: r.meta_data ? JSON.parse(r.meta_data || '{}') : ''
        }));
        
        // Calculate Stats
        this.stats.pending = this.requests.filter(r => r.status === 'Pending').length;
        this.stats.approved = this.requests.filter(r => r.status === 'Approved').length;
        
        // 2. Fetch Weekly Schedule
        const schedResponse = await fetch('http://localhost:3000/schedules');
        const schedData = await schedResponse.json();
        this.weeklySchedule = schedData;
        
        // 3. Mock Notifications based on recent updates (Since we don't have a real notif table yet)
        // In a real app, this would be another endpoint
        this.notifications = this.requests.slice(0, 3).map(r => ({
            id: r.id,
            message: `Your ${r.type} is ${r.status}`,
            time: r.date,
            type: r.status === 'Approved' ? 'success' : (r.status === 'Rejected' ? 'error' : 'info')
        }));

      } catch (error) {
        console.error("Failed to fetch dashboard data", error);
      } finally {
        this.isLoading = false;
      }
    },
    async handleRequestSubmit(formType) {
      if (!this.formData.reason) {
        alert("Please provide a reason.");
        return;
      }

      try {
          const user = JSON.parse(localStorage.getItem('user'));
          
          let meta = {};
          if (formType === 'Shift Swap Request') {
              meta = { from: this.formData.swapDateFrom, to: this.formData.swapDateTo };
          } else if (formType === 'Leave Request') {
              meta = { date: this.formData.leaveDate, type: this.formData.leaveType, days: this.formData.noOfDays };
          } else if (formType === 'Overtime Request') {
              meta = { date: this.formData.overtimeDate, hours: this.formData.overtimeHours };
          } else if (formType === 'Undertime Request') {
              meta = { date: this.formData.undertimeDate, hours: this.formData.undertimeHours };
          }

          const payload = {
            userId: user.id,
            type: formType,
            details: this.formData.reason, 
            reason: this.formData.reason,
            meta: meta
          };
          
          const response = await fetch('http://localhost:3000/requests', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload)
          });

          if (!response.ok) throw new Error("Failed to submit");

          alert(`${formType} submitted successfully!`);
          this.fetchDashboardData(); 
          this.formData.reason = '';
      } catch (e) {
          alert("Error submitting request: " + e.message);
      }
    },
    setActiveFormTab(tab) {
      this.activeFormTab = tab;
    },
    getStatusColor(status) {
      switch(status) {
        case 'Approved': return 'bg-green-500/20 text-green-500 border-green-500/20';
        case 'Pending': return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/20';
        case 'Rejected': return 'bg-red-500/20 text-red-500 border-red-500/20';
        default: return 'bg-gray-500/20 text-gray-500';
      }
    },
    getScheduleClass(schedule) {
       if (schedule === 'OFF') return 'text-gray-500 font-bold bg-[#333]/50';
       if (schedule.includes('8 AM')) return 'text-green-400 font-medium';
       if (schedule.includes('4 PM')) return 'text-yellow-400 font-medium';
       if (schedule.includes('12 AM')) return 'text-blue-400 font-medium';
       return 'text-white';
    }
  }
};
</script>

<style scoped>
/* Custom Scrollbar for side widgets if needed */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #1F1F1F;
}
::-webkit-scrollbar-thumb {
  background: #444;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: #d4a017;
}

.animate-slide-in-right {
  animation: slideInRight 0.4s ease-out forwards;
}

@keyframes slideInRight {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
</style>
