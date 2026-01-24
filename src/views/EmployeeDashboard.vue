<template>
  <div class="min-h-screen bg-[#1E1E1E] text-white font-poppins p-6 md:p-10">
    <!-- Header -->
    <header class="flex justify-between items-center mb-8">
      <div>
        <h1 class="text-3xl font-bold">Welcome back, Raque</h1>
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
          <div class="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold text-sm">RC</div>
          <span class="font-medium text-sm hidden md:block">Raque Canete</span>
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
            <h3 class="text-xl font-bold">Raque Canete</h3>
            <p class="text-[#d4a017] text-sm font-medium">Virtual Guard</p>
            <p class="text-yellow-500/60 text-xs mt-1">ID: 019</p>
         </div>

         <div class="space-y-6">
            <div class="border-b border-gray-700 pb-2">
               <p class="text-[#d4a017] text-sm mb-1">Email Address</p>
               <p class="text-white">raquecanete60@gmail.com</p>
            </div>
             <div class="border-b border-gray-700 pb-2">
               <p class="text-[#d4a017] text-sm mb-1">Contact Number</p>
               <p class="text-white">09669103841</p>
            </div>
             <div class="border-b border-gray-700 pb-2">
               <p class="text-[#d4a017] text-sm mb-1">Position</p>
               <p class="text-white">Virtual Guard</p>
            </div>
             <div class="border-b border-gray-700 pb-2">
               <p class="text-[#d4a017] text-sm mb-1">Email Address</p>
               <p class="text-white">raquecanete60@gmail.com</p>
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
             v-for="formTab in ['Swap Request', 'Leave Request', 'Overtime Request', 'Undertime Request']"
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

      <!-- Weekly Schedules Placeholder -->
      <div v-if="activeMainTab === 'Weekly Schedules'" class="lg:col-span-3 bg-[#252525] rounded-[2rem] p-8 border border-gray-700 flex items-center justify-center min-h-[400px]">
        <div class="text-center">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 text-gray-500 mx-auto mb-4">
               <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
           </svg>
           <h3 class="text-xl font-bold text-white mb-2">Weekly Schedules</h3>
           <p class="text-gray-400">Check your upcoming shift schedules.</p>
           <p class="text-yellow-500 mt-4 text-sm font-medium">Coming Soon</p>
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
      activeFormTab: 'Swap Request', // Restored
      userData: {
        name: 'Raque Canete',
        initials: 'RC'
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
      showProfileModal: false
    };
  },
  computed: {
    // Restored Logic
    activeFormTabComponent() {
      switch(this.activeFormTab) {
        case 'Swap Request': return 'SwapRequest';
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
      if(confirm('Are you sure you want to log out?')) {
        localStorage.removeItem('token');
        this.$router.push('/login');
      }
    },
    async fetchDashboardData() {
      // Simulate API call
      this.isLoading = true;
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
        
        // Mock Response Data
        this.stats = {
          pending: 1,
          approved: 5,
          totalHours: 168,
          currentCutoff: 'Jan 16-30'
        };

        this.requests = [
          {
            id: 1,
            type: 'Leave Request',
            status: 'Approved',
            details: 'Pa print kog resignation..',
            date: 'Jan 26-29, 2026',
            meta: '3 days'
          },
          {
            id: 2,
            type: 'Shift Swap Request',
            status: 'Pending',
            details: 'Mahilantan ko ig mid ahaks',
            date: 'Jan 27, 2026',
            meta: ''
          },
          {
            id: 3,
            type: 'Undertime',
            status: 'Rejected',
            details: 'Personal errands',
            date: 'Jan 28, 2026',
            meta: '2 hours'
          }
        ];

        this.notifications = [
          {
            id: 1,
            message: 'Your leave request has been approved',
            time: '2 hours ago',
            type: 'success'
          },
          {
            id: 2,
            message: 'Your undertime request has been rejected',
            time: '2 hours ago',
            type: 'error'
          }
        ];

        // Autofill Name/Pos for demo
        this.formData.name = this.userData.name;
        this.formData.position = 'Virtual Guard'; // Mock
        this.formData.department = 'Operations'; // Mock
        
        const today = new Date().toISOString().substr(0, 10);
        this.formData.dateFiled = today;

      } catch (error) {
        console.error("Failed to fetch dashboard data", error);
      } finally {
        this.isLoading = false;
      }
    },
    handleRequestSubmit(formType) {
      // Logic to submit data to backend.
      // 1. Validate inputs
      if (!this.formData.reason) {
        alert("Please provide a reason.");
        return;
      }

      // 2. Prepare payload
      const payload = {
        type: formType,
        ...this.formData
      };

      console.log("Submitting Request:", payload);
      
      // 3. Simulate API post
      alert(`${formType} submitted successfully!`);
      
      // 4. Update UI (Mock update)
      this.stats.pending++;
      this.requests.unshift({
        id: Date.now(),
        type: formType,
        status: 'Pending',
        details: this.formData.reason,
        date: new Date().toLocaleDateString(),
        meta: 'Just now'
      });
      
      // 5. Reset specific form fields if needed
      this.formData.reason = '';
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
