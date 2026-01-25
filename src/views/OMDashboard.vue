<template>
  <div class="min-h-screen bg-[#1E1E1E] text-white font-poppins p-4 md:p-10">
    <!-- Header -->
    <header class="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4 md:gap-0">
      <div class="mb-2 md:mb-0">
        <h1 class="text-3xl font-bold">OM Dashboard</h1>
        <p class="text-gray-400 text-sm">Overview of operations requests and approvals</p>
      </div>
      
      <div class="flex flex-wrap items-center gap-4 w-full md:w-auto">
         <!-- Search Input -->
         <div class="flex items-center bg-[#2A2A2A] rounded-xl px-4 py-2 border border-gray-700 focus-within:border-yellow-500 transition w-full md:w-64 order-last md:order-first mt-2 md:mt-0">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400 mr-2">
             <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
           </svg>
           <input type="text" v-model="searchQuery" placeholder="Search employee..." class="bg-transparent border-none text-white text-sm focus:outline-none w-full placeholder-gray-500" />
         </div>

         <!-- Notifications -->
         <div class="relative">
            <button @click="showNotifications = !showNotifications" class="p-2 bg-[#2A2A2A] rounded-full text-gray-400 hover:text-yellow-500 transition border border-gray-700 relative">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
               </svg>
               <span class="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border border-[#2A2A2A]"></span>
            </button>
            
            <!-- Dropdown -->
            <div v-if="showNotifications" class="absolute right-0 mt-3 w-80 bg-[#2A2A2A] border border-gray-700 rounded-xl shadow-2xl z-50 overflow-hidden animate-zoom-in">
               <div class="p-4 border-b border-gray-600">
                  <h3 class="font-bold text-white">Notifications</h3>
               </div>
               <div class="max-h-64 overflow-y-auto">
                  <div class="p-4 border-b border-gray-700 hover:bg-[#333] cursor-pointer">
                     <p class="text-sm font-medium text-white">New Overtime Request</p>
                     <p class="text-xs text-gray-400 mt-1">Guard A requesting OT due to late relief.</p>
                     <p class="text-[10px] text-yellow-500 mt-2">5 mins ago</p>
                  </div>
                  <div class="p-4 hover:bg-[#333] cursor-pointer">
                     <p class="text-sm font-medium text-white">Incident Report</p>
                     <p class="text-xs text-gray-400 mt-1">Minor incident reported at Gate 2.</p>
                     <p class="text-[10px] text-yellow-500 mt-2">1 hour ago</p>
                  </div>
               </div>
            </div>
         </div>

         <div class="relative">
            <button @click="showProfileDropdown = !showProfileDropdown" class="flex items-center space-x-3 bg-[#2A2A2A] rounded-full px-4 py-2 border border-gray-700 hover:border-yellow-500 transition">
               <div class="w-8 h-8 rounded-full bg-[#d4a017] flex items-center justify-center text-black font-bold text-sm">{{ (userData.first_name?.[0] || 'O') + (userData.last_name?.[0] || 'M') }}</div>
               <span class="font-medium text-sm hidden md:block">{{ userData.first_name }} {{ userData.last_name }}</span>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-gray-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
               </svg>
            </button>

            <!-- Profile Dropdown -->
            <div v-if="showProfileDropdown" class="absolute right-0 mt-3 w-56 bg-[#2A2A2A] border border-gray-700 rounded-xl shadow-2xl z-50 overflow-hidden animate-zoom-in">
               <div class="p-4 border-b border-gray-600">
                  <p class="text-sm font-bold text-white">{{ userData.first_name }} {{ userData.last_name }}</p>
                  <p class="text-xs text-gray-400">{{ userData.email }}</p>
               </div>
               <div class="py-2">
                  <router-link to="/om/account" class="block px-4 py-2 text-sm text-gray-300 hover:bg-[#333] hover:text-white transition">
                     My Account
                  </router-link>
                  <!-- Maybe OM doesn't need payslips view here? Or standard check. Keeping it simple for now -->
               </div>
               <div class="border-t border-gray-600 pt-2 pb-2">
                  <button @click="handleLogout" class="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-[#333] hover:text-red-500 transition">
                     Log out
                  </button>
               </div>
            </div>
         </div>
      </div>
    </header>

    <!-- Stats Overview -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <!-- Total Requests -->
        <div class="bg-[#252525] border border-gray-700 rounded-2xl p-6 flex justify-between items-center">
           <div>
             <p class="text-gray-400 text-sm mb-1">Total Requests</p>
             <h3 class="text-3xl font-bold">{{ stats.total }}</h3>
           </div>
           <div class="p-3 bg-gray-700/30 rounded-xl text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
           </div>
        </div>

        <!-- Pending -->
        <div class="bg-[#252525] border border-yellow-500/50 rounded-2xl p-6 flex justify-between items-center">
           <div>
             <p class="text-gray-400 text-sm mb-1">Pending Review</p>
             <h3 class="text-3xl font-bold text-yellow-500">{{ stats.pending }}</h3>
           </div>
           <div class="p-3 bg-yellow-500/20 rounded-xl text-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
           </div>
        </div>

        <!-- Approved This Month -->
        <div class="bg-[#252525] border border-green-500/30 rounded-2xl p-6 flex justify-between items-center">
           <div>
             <p class="text-gray-400 text-sm mb-1">Approved (Month)</p>
             <h3 class="text-3xl font-bold text-green-500">{{ stats.approved }}</h3>
           </div>
           <div class="p-3 bg-green-500/20 rounded-xl text-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
           </div>
        </div>
    </div>

    <!-- Requests Table -->
    <div class="bg-[#252525] rounded-[2rem] border border-gray-700 overflow-hidden">
       <div class="p-4 md:p-8 border-b border-gray-700 flex flex-col gap-6">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
             <h2 class="text-xl font-bold flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#d4a017]">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                </svg>
                Incoming Requests
             </h2>

             <!-- Status Filter Tabs -->
             <div class="flex bg-[#1E1E1E] rounded-xl p-1 overflow-x-auto max-w-full">
                <button 
                  v-for="filter in ['All', 'Pending', 'Approved', 'Rejected']" 
                  :key="filter"
                  @click="currentFilter = filter"
                  :class="['px-4 py-2 rounded-lg text-sm transition font-medium whitespace-nowrap', currentFilter === filter ? 'bg-[#333] text-white shadow' : 'text-gray-500 hover:text-gray-300']"
                >
                  {{ filter }}
                </button>
             </div>
          </div>

          <!-- Type Filter Tabs -->
          <div class="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
             <span class="text-xs uppercase text-gray-500 font-bold mr-2 whitespace-nowrap">Filter by Type:</span>
             <button 
               v-for="type in ['All Types', 'Leave Request', 'Overtime Request', 'Undertime', 'Shift Swap']"
               :key="type"
               @click="currentTypeFilter = type"
               :class="['px-3 py-1 rounded-full text-xs border transition whitespace-nowrap flex-shrink-0', currentTypeFilter === type ? 'bg-[#d4a017]/10 text-[#d4a017] border-[#d4a017]' : 'border-gray-700 text-gray-400 hover:border-gray-500']"
             >
               {{ type }}
             </button>
          </div>
       </div>

       <div class="overflow-x-auto">
          <table class="w-full">
             <thead class="bg-[#1F1F1F] text-gray-400 text-xs uppercase tracking-wider text-left">
                <tr>
                   <th class="px-8 py-4 font-medium">Employee</th>
                   <th class="px-8 py-4 font-medium">Request Type</th>
                   <th class="px-8 py-4 font-medium">Details</th>
                   <th class="px-8 py-4 font-medium">Date Filed</th>
                   <th class="px-8 py-4 font-medium">OM Status</th>
                   <th class="px-8 py-4 font-medium">OM Approver</th>
                   <th class="px-8 py-4 font-medium text-right">Actions</th>
                </tr>
             </thead>
             <tbody class="divide-y divide-gray-700">
                <tr v-if="filteredRequests.length === 0">
                   <td colspan="6" class="px-8 py-8 text-center text-gray-500">No requests found matching this filter.</td>
                </tr>
                <tr v-for="req in filteredRequests" :key="req.id" class="hover:bg-[#2A2A2A] transition cursor-pointer" @click="viewRequest(req)">
                   <td class="px-8 py-4">
                      <div class="flex items-center gap-3">
                         <div class="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-xs font-bold">{{ req.initials }}</div>
                         <div>
                            <p class="font-medium text-white">{{ req.name }}</p>
                            <p class="text-xs text-gray-500">{{ req.department }}</p>
                         </div>
                      </div>
                   </td>
                   <td class="px-8 py-4">
                      <span class="text-sm text-gray-300 font-medium">{{ req.type }}</span>
                   </td>
                   <td class="px-8 py-4">
                      <div class="max-w-xs">
                         <p class="text-sm text-gray-400 truncate">{{ req.reason }}</p>
                      </div>
                   </td>
                   <td class="px-8 py-4 text-sm text-gray-400">{{ req.date }}</td>
                   <td class="px-8 py-4">
                      <span :class="['inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border', getStatusColor(req.om_status)]">
                         {{ req.om_status }}
                      </span>
                   </td>
                   <td class="px-8 py-4 text-sm text-gray-500">
                      {{ req.om_approved_by || '---' }}
                   </td>
                   <td class="px-8 py-4 text-right">
                      <div v-if="req.om_status === 'Pending'" class="flex justify-end gap-2" @click.stop>
                         <button @click="updateStatus(req.id, 'Approved')" class="p-2 bg-green-500/10 hover:bg-green-500/20 text-green-500 rounded-lg transition" title="Approve">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                         </button>
                         <button @click="updateStatus(req.id, 'Rejected')" class="p-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-lg transition" title="Reject">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                         </button>
                      </div>
                      <span v-else class="text-xs text-gray-600 italic">No actions needed</span>
                   </td>
                </tr>
             </tbody>
          </table>
       </div>

       <!-- Pagination Placeholder -->
       <div class="p-4 border-t border-gray-700 flex justify-between items-center text-sm text-gray-500">
          <span>Showing 1 to {{ filteredRequests.length }} of {{ filteredRequests.length }} entries</span>
          <div class="flex gap-2">
             <button class="px-3 py-1 rounded border border-gray-700 hover:bg-gray-700 disabled:opacity-50">Previous</button>
             <button class="px-3 py-1 rounded border border-gray-700 hover:bg-gray-700 disabled:opacity-50">Next</button>
          </div>
       </div>

       <!-- Request Details Modal -->
      <div v-if="showRequestModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div class="bg-[#2A2A2A] w-full max-w-lg rounded-2xl shadow-2xl border border-gray-700 overflow-hidden animate-zoom-in">
             <div class="flex justify-between items-center p-6 border-b border-gray-700 bg-[#333]">
                <h3 class="text-xl font-bold text-white flex items-center gap-2">
                   Request Details
                </h3>
                <button @click="closeModal" class="text-gray-400 hover:text-white transition">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                   </svg>
                </button>
             </div>
             
             <div class="p-8 space-y-6" v-if="selectedRequest">
                <div class="flex items-center gap-4 mb-2">
                   <div class="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-sm font-bold">{{ selectedRequest.initials }}</div>
                   <div>
                      <h4 class="font-bold text-lg text-white">{{ selectedRequest.name }}</h4>
                      <p class="text-sm text-gray-400">{{ selectedRequest.department }}</p>
                   </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                   <div class="bg-[#252525] p-4 rounded-xl border border-gray-700">
                      <p class="text-xs text-gray-400 uppercase mb-1">Type</p>
                      <p class="text-yellow-500 font-bold">{{ selectedRequest.type }}</p>
                   </div>
                   <div class="bg-[#252525] p-4 rounded-xl border border-gray-700">
                      <p class="text-xs text-gray-400 uppercase mb-1">Date Filed</p>
                      <p class="text-white font-medium">{{ selectedRequest.date }}</p>
                   </div>
                </div>

                <div class="bg-[#252525] p-4 rounded-xl border border-gray-700">
                   <p class="text-xs text-gray-400 uppercase mb-2">Reason</p>
                   <p class="text-gray-300 leading-relaxed">{{ selectedRequest.reason }}</p>
                </div>

                <div class="flex justify-between items-center pt-2">
                   <p class="text-xs text-gray-400 uppercase">Current Status:</p>
                   <span :class="['px-3 py-1 rounded-full text-sm font-medium border', getStatusColor(selectedRequest.status)]">
                      {{ selectedRequest.status }}
                   </span>
                </div>
             </div>
             
             <div class="p-6 border-t border-gray-700 bg-[#333] flex justify-end gap-3">
                <button @click="closeModal" class="px-4 py-2 text-gray-400 hover:text-white transition">Close</button>
                <div v-if="selectedRequest && selectedRequest.om_status === 'Pending'" class="flex gap-2">
                   <button @click="updateStatus(selectedRequest.id, 'Rejected')" class="px-6 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-500 border border-red-500/50 rounded-lg transition">Reject</button>
                   <button @click="updateStatus(selectedRequest.id, 'Approved')" class="px-6 py-2 bg-[#d4a017] hover:bg-[#b88b14] text-black font-bold rounded-lg transition shadow-lg">Approve</button>
                </div>
             </div>
          </div>
       </div>

       <!-- Confirmation Modal -->
       <div v-if="showConfirmation" class="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
           <div class="bg-[#2A2A2A] w-full max-w-sm rounded-2xl shadow-2xl border border-gray-700 p-8 text-center animate-zoom-in">
               <div :class="['w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-500', pendingAction.status === 'Approved' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500']">
                   <svg v-if="pendingAction.status === 'Approved'" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                   <svg v-else class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
               </div>
               <h3 class="text-xl font-bold text-white mb-2">Confirm {{ pendingAction.status }}</h3>
               <p class="text-gray-400 mb-8">Are you sure you want to {{ pendingAction.status.toLowerCase() }} this request? This action cannot be undone.</p>
               <div class="flex gap-3">
                   <button @click="showConfirmation = false" class="flex-1 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-xl transition font-medium">Cancel</button>
                   <button @click="confirmStatusUpdate" :class="['flex-1 py-3 rounded-xl text-black font-bold transition shadow-lg px-2', pendingAction.status === 'Approved' ? 'bg-green-500 hover:bg-green-400' : 'bg-red-500 hover:bg-red-400']">
                      Yes, {{ pendingAction.status }}
                   </button>
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
export default {
  name: "OMDashboard",
  data() {
    return {
      currentFilter: 'All',
      currentTypeFilter: 'All Types',
      searchQuery: '',
      showNotifications: false,
      showProfileDropdown: false,
      showRequestModal: false,
      selectedRequest: null,
      showConfirmation: false,
      pendingAction: { id: null, status: '' },
      userData: {
        first_name: 'Ops',
        last_name: 'Manager',
        email: 'om@watchtower.com'
      },
      stats: {
        total: 0,
        pending: 0,
        approved: 0
      },
      requests: [],
      showLogoutModal: false
    }
  },
  mounted() {
    this.initUser();
    this.fetchData();
  },
  computed: {
    filteredRequests() {
       let result = this.requests;
       
       // Filter by Status Tab
       if (this.currentFilter !== 'All') {
         result = result.filter(req => req.status === this.currentFilter);
       }

       // Filter by Type Tab
       if (this.currentTypeFilter !== 'All Types') {
         result = result.filter(req => {
            if (this.currentTypeFilter === 'Shift Swap') return req.type.includes('Swap');
            return req.type === this.currentTypeFilter;
         });
       }

       // Filter by Search
       if (this.searchQuery) {
         const query = this.searchQuery.toLowerCase();
         result = result.filter(req => 
            req.name.toLowerCase().includes(query) || 
            req.department.toLowerCase().includes(query)
         );
       }
       
       return result;
    }
  },
  methods: {
    handleLogout() {
       this.showLogoutModal = true;
       this.showProfileDropdown = false;
    },
    confirmLogout() {
       localStorage.removeItem('token');
       localStorage.removeItem('user');
       this.$router.push('/login');
    },
    initUser() {
      const userStr = localStorage.getItem('user');
      if (userStr) {
        this.userData = JSON.parse(userStr);
      }
    },
    async fetchData() {
      try {
        const response = await fetch('http://localhost:3000/requests');
        const data = await response.json();
        this.requests = data.map(r => ({
          id: r.id,
          name: `${r.first_name} ${r.last_name}`,
          initials: (r.first_name[0] + r.last_name[0]).toUpperCase(),
          department: r.department || 'Operations',
          type: r.type,
          reason: r.reason,
          date: new Date(r.created_at).toLocaleDateString(),
          status: r.status,
          om_status: r.om_status === 'Waiting' ? 'Pending' : r.om_status,
          om_approved_by: r.om_approved_by
        }));

        this.stats.total = this.requests.length;
        this.stats.pending = this.requests.filter(r => r.om_status === 'Pending').length;
        this.stats.approved = this.requests.filter(r => r.om_status === 'Approved').length;
      } catch (e) {
        console.error("Error fetching OM data:", e);
      }
    },
    viewRequest(req) {
      this.selectedRequest = req;
      this.showRequestModal = true;
    },
    closeModal() {
      this.showRequestModal = false;
      this.selectedRequest = null;
    },
    updateStatus(id, newStatus) {
       this.pendingAction = { id, status: newStatus };
       this.showConfirmation = true;
    },
    async confirmStatusUpdate() {
        const { id, status } = this.pendingAction;
        try {
           const response = await fetch(`http://localhost:3000/requests/${id}/status`, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ 
                 status: status,
                 role: 'Operations Manager',
                 adminName: `${this.userData.first_name} ${this.userData.last_name}`
              })
           });
           
           if (response.ok) {
              await this.fetchData();
              this.showConfirmation = false;
              this.closeModal();
           } else {
              alert('Update failed');
           }
        } catch (e) {
           console.error(e);
        }
    },
    getStatusColor(status) {
       switch(status) {
          case 'Approved': return 'bg-green-500/10 text-green-500 border-green-500/20';
          case 'Pending': return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
          case 'Rejected': return 'bg-red-500/10 text-red-500 border-red-500/20';
          default: return 'bg-gray-500/10 text-gray-500';
       }
    }
  }
}
</script>

<style scoped>
.animate-zoom-in {
  animation: zoomIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes zoomIn {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
</style>
