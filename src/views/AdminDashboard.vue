<template>
  <div class="min-h-screen bg-[#1E1E1E] text-white font-poppins p-4 md:p-10">
    <!-- Header -->
    <header class="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4 md:gap-0">
      <div>
        <h1 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-[#d4a017]">
          Super Admin Dashboard
        </h1>
        <p class="text-gray-400 text-sm">System Administration & Configuration</p>
      </div>

      <div class="flex items-center gap-4">
         <div class="bg-[#2A2A2A] px-4 py-2 rounded-full border border-gray-700 flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-bold text-sm">AD</div>
            <span class="text-sm font-medium">Administrator</span>
         </div>
         <button @click="handleLogout" class="p-2 hover:bg-red-500/10 rounded-full text-gray-400 hover:text-red-500 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>
         </button>
      </div>
    </header>

    <!-- Navigation Tabs -->
    <div class="flex flex-wrap gap-4 mb-8 border-b border-gray-700 pb-1">
      <button 
        v-for="tab in ['User Management', 'Forms', 'Payslips (View Only)']"
        :key="tab"
        @click="activeTab = tab"
        :class="['pb-3 text-sm font-medium transition border-b-2 px-4', activeTab === tab ? 'border-[#d4a017] text-[#d4a017]' : 'border-transparent text-gray-400 hover:text-white']"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Dashboard Metrics -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fade-in">
       <div class="bg-gradient-to-br from-blue-900/50 to-blue-800/30 p-6 rounded-2xl border border-blue-700/50 backdrop-blur-sm">
          <div class="flex justify-between items-start mb-4">
             <div class="p-3 bg-blue-500/20 rounded-xl">
                <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
             </div>
             <span class="text-xs font-bold bg-blue-500/20 text-blue-300 px-2 py-1 rounded-lg">+12%</span>
          </div>
          <h3 class="text-3xl font-bold text-white mb-1">{{ users.length }}</h3>
          <p class="text-sm text-blue-200">Total Active Users</p>
       </div>

       <div class="bg-gradient-to-br from-[#d4a017]/30 to-yellow-800/30 p-6 rounded-2xl border border-yellow-600/50 backdrop-blur-sm">
          <div class="flex justify-between items-start mb-4">
             <div class="p-3 bg-yellow-500/20 rounded-xl">
                <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
             </div>
             <span class="text-xs font-bold bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-lg">Action Needed</span>
          </div>
          <h3 class="text-3xl font-bold text-white mb-1">{{ allRequests.filter(r => r.status === 'Pending').length }}</h3>
          <p class="text-sm text-yellow-200">Pending Requests</p>
       </div>

       <div class="bg-gradient-to-br from-green-900/50 to-green-800/30 p-6 rounded-2xl border border-green-700/50 backdrop-blur-sm">
          <div class="flex justify-between items-start mb-4">
             <div class="p-3 bg-green-500/20 rounded-xl">
                <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
             </div>
             <span class="text-xs font-bold bg-green-500/20 text-green-300 px-2 py-1 rounded-lg">System Healthy</span>
          </div>
          <h3 class="text-3xl font-bold text-white mb-1">{{ formTypes.filter(f => f.isActive).length }}</h3>
          <p class="text-sm text-green-200">Active Form Types</p>
       </div>
    </div>

    <!-- CONTENT: User Management -->
    <div v-if="activeTab === 'User Management'" class="space-y-6 animate-fade-in">
       <div class="flex flex-col md:flex-row justify-between items-start md:items-center bg-[#252525] p-6 rounded-2xl border border-gray-700 mb-6">
          <div class="mb-4 md:mb-0">
             <h2 class="text-xl font-bold">System Users</h2>
             <p class="text-xs text-gray-400">Manage accounts for Staff and Employees.</p>
          </div>
          
          <div class="flex gap-4 items-center">
             <!-- Role Toggle -->
             <div class="bg-[#1E1E1E] p-1 rounded-lg flex">
                <button 
                  @click="userCategory = 'Staff'" 
                  :class="['px-4 py-1.5 text-sm rounded-md transition', userCategory === 'Staff' ? 'bg-[#d4a017] text-black font-bold' : 'text-gray-400 hover:text-white']"
                >
                  Staff (Managers/Officers)
                </button>
                <button 
                  @click="userCategory = 'Employees'" 
                  :class="['px-4 py-1.5 text-sm rounded-md transition', userCategory === 'Employees' ? 'bg-[#d4a017] text-black font-bold' : 'text-gray-400 hover:text-white']"
                >
                  Employees
                </button>
             </div>

             <button @click="openUserModal" class="bg-[#d4a017] hover:bg-[#b88b14] text-black font-bold py-2 px-6 rounded-lg transition shadow-lg flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
                Add User
             </button>
          </div>
       </div>

       <!-- Users Table -->
       <div class="bg-[#252525] rounded-2xl border border-gray-700 overflow-hidden">
          <table class="w-full text-left">
             <thead class="bg-[#1F1F1F] text-gray-400 text-xs uppercase tracking-wider">
                <tr>
                   <th class="px-6 py-4">Name & ID</th>
                   <th class="px-6 py-4">Role</th>
                   <th class="px-6 py-4">Department</th>
                   <th class="px-6 py-4">Status</th>
                   <th class="px-6 py-4 text-right">Actions</th>
                </tr>
             </thead>
             <tbody v-if="filteredUsers.length === 0">
                <tr>
                   <td colspan="5" class="px-6 py-8 text-center text-gray-500">No users found in this category.</td>
                </tr>
             </tbody>
             <tbody class="divide-y divide-gray-700">
                <tr v-for="user in filteredUsers" :key="user.id" class="hover:bg-[#2A2A2A] transition">
                   <td class="px-6 py-4">
                      <div class="flex items-center gap-3">
                         <div class="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-xs font-bold">{{ user.initials }}</div>
                         <div>
                            <p class="font-bold text-[#d4a017]">{{ user.companyId }}</p>
                            <p class="text-sm text-white">{{ user.name }}</p>
                            <p class="text-xs text-gray-500">{{ user.email }}</p>
                         </div>
                      </div>
                   </td>
                   <td class="px-6 py-4">
                      <span class="px-2 py-1 rounded-full text-xs border border-gray-600 bg-gray-700 text-gray-300">{{ user.role }}</span>
                   </td>
                   <td class="px-6 py-4 text-sm text-gray-400">{{ user.department }}</td>
                   <td class="px-6 py-4">
                      <span :class="['text-xs flex items-center gap-1', user.status === 'Active' ? 'text-green-500' : 'text-red-500']">
                         <span :class="['w-1.5 h-1.5 rounded-full', user.status === 'Active' ? 'bg-green-500' : 'bg-red-500']"></span> {{ user.status }}
                      </span>
                   </td>
                   <td class="px-6 py-4 text-right">
                      <button @click="editUser(user)" class="text-gray-400 hover:text-white mr-3">Edit</button>
                   </td>
                </tr>
             </tbody>
          </table>
       </div>
    </div>

    <!-- CONTENT: Forms (Requests View) -->
    <div v-if="activeTab === 'Forms'" class="space-y-6 animate-fade-in">
       
       <!-- Form List View -->
       <div v-if="!selectedForm">
          <div class="bg-[#252525] p-8 rounded-2xl border border-gray-700 text-center">
             <h2 class="text-2xl font-bold mb-4">Form Submissions</h2>
             <p class="text-gray-400 mb-8 max-w-2xl mx-auto">Select a form type to view all employee requests and submissions. You can also configure form layouts here.</p>
             
             <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="form in formTypes" :key="form.id" class="p-6 rounded-xl border border-gray-600 bg-[#333] hover:border-[#d4a017] transition cursor-pointer group relative flex flex-col justify-between h-full">
                   
                   <div @click="viewFormRequests(form)" class="flex-1">
                      <div class="absolute top-4 right-4">
                         <span :class="['w-3 h-3 rounded-full block', form.isActive ? 'bg-green-500' : 'bg-red-500']" :title="form.isActive ? 'Active' : 'Inactive'"></span>
                      </div>
                      <div class="w-12 h-12 rounded-full bg-[#d4a017]/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-[#d4a017] transition-colors">
                         <svg class="w-6 h-6 text-[#d4a017] group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                         </svg>
                      </div>
                      <h3 class="font-bold text-lg mb-1">{{ form.name }}</h3>
                      <p class="text-xs text-gray-400 mb-4">{{ getRequestCount(form.name) }} Submissions</p>
                   </div>
                   
                   <div class="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-600">
                      <button @click.stop="viewFormRequests(form)" class="w-full py-2 bg-[#d4a017] text-black font-bold rounded-lg hover:bg-[#b88b14] transition text-sm">View Requests</button>
                      <div class="flex gap-2">
                         <button @click.stop="openFormEditor(form)" class="flex-1 py-2 rounded-lg border border-gray-600 hover:bg-white hover:text-black transition text-sm" title="Edit Fields">
                            <svg class="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                         </button>
                         <button 
                           @click.stop="toggleFormStatus(form)"
                           :class="['flex-1 py-2 rounded-lg text-sm font-medium transition', form.isActive ? 'bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white' : 'bg-green-500/10 text-green-500 hover:bg-green-500 hover:text-white']"
                           :title="form.isActive ? 'Disable Form' : 'Enable Form'"
                         >
                           <svg v-if="form.isActive" class="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>
                           <svg v-else class="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                         </button>
                      </div>
                   </div>
                </div>
                
                <!-- Add New Form -->
                <div class="p-6 rounded-xl border-2 border-dashed border-gray-700 flex flex-col items-center justify-center hover:border-[#d4a017] hover:bg-[#2A2A2A] transition cursor-pointer min-h-[250px]">
                   <svg class="w-8 h-8 text-gray-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                   </svg>
                   <span class="text-gray-500 font-medium">Create New Form</span>
                </div>
             </div>
          </div>
       </div>

       <!-- Selected Form Requests Table -->
       <div v-else>
          <div class="flex items-center gap-4 mb-6">
             <button @click="selectedForm = null" class="p-2 bg-[#2A2A2A] rounded-full hover:bg-gray-700 transition">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
             </button>
             <h2 class="text-2xl font-bold">{{ selectedForm.name }} Requests</h2>
          </div>

          <div class="bg-[#252525] rounded-2xl border border-gray-700 overflow-hidden">
             <table class="w-full text-left">
                <thead class="bg-[#1F1F1F] text-gray-400 text-xs uppercase tracking-wider">
                   <tr>
                      <th class="px-6 py-4">Employee</th>
                      <th class="px-6 py-4">Date Filed</th>
                      <th class="px-6 py-4">Details</th>
                      <th class="px-6 py-4">Overall Status</th>
                       <th class="px-6 py-4">DH Status</th>
                       <th class="px-6 py-4">DH Approver</th>
                      <th class="px-6 py-4 text-right">Action</th>
                   </tr>
                </thead>
                <tbody v-if="filteredRequests.length === 0">
                   <tr>
                      <td colspan="5" class="px-6 py-8 text-center text-gray-500">No requests found for this form type.</td>
                   </tr>
                </tbody>
                <tbody class="divide-y divide-gray-700">
                   <tr v-for="req in filteredRequests" :key="req.id" class="hover:bg-[#2A2A2A] transition">
                      <td class="px-6 py-4 font-medium text-white">
                         <div class="flex items-center gap-3">
                            <div class="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center text-xs font-bold text-blue-400">
                               {{ req.employee.split(' ').map(n => n[0]).join('') }}
                            </div>
                            {{ req.employee }}
                         </div>
                      </td>
                      <td class="px-6 py-4 text-gray-400">{{ req.dateFiled }}</td>
                      <td class="px-6 py-4 text-gray-300">
                         <div class="text-sm">
                            <span v-if="req.details.dates" class="block font-medium">{{ req.details.dates }}</span>
                            <span class="text-xs text-gray-500">{{ req.details.reason }}</span>
                         </div>
                      </td>
                      <td class="px-6 py-4">
                         <span :class="['text-xs px-2 py-1 rounded-full border', getStatusColor(req.status)]">{{ req.status }}</span>
                       </td>
                       <td class="px-6 py-4">
                          <span :class="['text-xs px-2 py-1 rounded-full border', getStatusColor(req.dh_status)]">{{ req.dh_status }}</span>
                       </td>
                       <td class="px-6 py-4 text-xs text-gray-500">
                          {{ req.dh_approved_by || '---' }}
                      </td>
                      <td class="px-6 py-4 text-right">
                         <div v-if="req.dh_status === 'Pending'" class="flex justify-end gap-2 text-xs">
                            <button @click.stop="approveRequest(req.id, 'Approved')" class="text-green-500 hover:text-green-400 font-bold">Approve</button>
                            <button @click.stop="approveRequest(req.id, 'Rejected')" class="text-red-500 hover:text-red-400 font-bold">Reject</button>
                         </div>
                         <span v-else class="text-xs text-gray-500 italic">No Action</span>
                      </td>
                   </tr>
                </tbody>
             </table>
          </div>
       </div>
    </div>

    <!-- CONTENT: Payslips -->
    <div v-if="activeTab === 'Payslips (View Only)'" class="space-y-6 animate-fade-in">
       <div class="flex items-center gap-3 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl text-yellow-500 mb-6">
          <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p class="text-sm">You have read-only access to payslips. You cannot generate, edit, or delete these records.</p>
       </div>

       <div class="bg-[#252525] rounded-xl border border-gray-700 overflow-hidden">
          <table class="w-full text-left">
             <thead class="bg-[#1F1F1F] text-gray-400 text-xs uppercase tracking-wider">
                <tr>
                   <th class="px-6 py-4">Employee</th>
                   <th class="px-6 py-4">Period</th>
                   <th class="px-6 py-4">Net Pay</th>
                   <th class="px-6 py-4">Date Generated</th>
                   <th class="px-6 py-4 text-right">Action</th>
                </tr>
             </thead>
             <tbody class="divide-y divide-gray-700">
                <tr v-for="slip in payslips" :key="slip.id" class="hover:bg-[#2A2A2A] transition">
                   <td class="px-6 py-4 font-medium text-white">{{ slip.employee }}</td>
                   <td class="px-6 py-4 text-gray-300">{{ slip.period }}</td>
                   <td class="px-6 py-4 text-green-400 font-bold">{{ slip.netPay }}</td>
                   <td class="px-6 py-4 text-gray-400 text-sm">{{ slip.generated }}</td>
                   <td class="px-6 py-4 text-right">
                      <button class="text-[#d4a017] hover:underline text-sm">View Details</button>
                   </td>
                </tr>
             </tbody>
          </table>
       </div>
    </div>

    <!-- Add User Modal -->
    <div v-if="showUserModal" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
       <!-- ... User Modal Content ... -->
       <div class="bg-[#2A2A2A] w-full max-w-md rounded-2xl border border-gray-700 overflow-hidden shadow-2xl animate-zoom-in">
          <div class="p-6 border-b border-gray-700 bg-[#333]">
             <h3 class="text-lg font-bold text-white">{{ isEditing ? 'Edit User' : 'Create New User' }}</h3>
          </div>
          <div class="p-6 space-y-4">
              <!-- ... existing fields ... -->
             <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                   <label class="text-xs text-gray-400 uppercase tracking-wider block mb-1">First Name</label>
                   <input type="text" v-model="newUser.firstName" class="w-full bg-[#1E1E1E] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#d4a017] capitalize" placeholder="Juan">
                </div>
                <div>
                   <label class="text-xs text-gray-400 uppercase tracking-wider block mb-1">Middle Name</label>
                   <input type="text" v-model="newUser.middleName" class="w-full bg-[#1E1E1E] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#d4a017] capitalize" placeholder="Delos">
                </div>
                <div>
                   <label class="text-xs text-gray-400 uppercase tracking-wider block mb-1">Last Name</label>
                   <input type="text" v-model="newUser.lastName" class="w-full bg-[#1E1E1E] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#d4a017] capitalize" placeholder="Cruz">
                </div>
             </div>
             <div>
                <label class="text-xs text-gray-400 uppercase tracking-wider block mb-1">Birthdate</label>
                <input type="date" v-model="newUser.birthdate" class="w-full bg-[#1E1E1E] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#d4a017]">
             </div>
             <div>
                <label class="text-xs text-gray-400 uppercase tracking-wider block mb-1">Email Address</label>
                <input type="email" v-model="newUser.email" class="w-full bg-[#1E1E1E] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#d4a017]" placeholder="name@watchtower.com">
             </div>
             <div>
                <label class="text-xs text-gray-400 uppercase tracking-wider block mb-1">Company ID</label>
                <div class="flex">
                  <span class="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-600 bg-[#333] text-gray-400 text-sm font-bold">WT-</span>
                  <input type="text" v-model="newUser.companyId" class="w-full bg-[#1E1E1E] border border-gray-600 rounded-r-lg px-3 py-2 text-white focus:outline-none focus:border-[#d4a017]" placeholder="2026-001">
                </div>
             </div>
             <div>
                <label class="text-xs text-gray-400 uppercase tracking-wider block mb-1">Role</label>
                <select v-model="newUser.role" class="w-full bg-[#1E1E1E] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#d4a017]">
                   <option value="Employee">Employee</option>
                   <option value="HR Manager">HR Manager</option>
                   <option value="Officer">Officer</option>
                   <option value="Operations Manager">Operations Manager</option>
                   <option value="Department Head">Department Head</option>
                </select>
             </div>
             <div>
                <label class="text-xs text-gray-400 uppercase tracking-wider block mb-1">Department</label>
                <input type="text" v-model="newUser.department" class="w-full bg-[#1E1E1E] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#d4a017]" placeholder="e.g. Logistics">
             </div>
             <div v-if="isEditing">
                <label class="text-xs text-gray-400 uppercase tracking-wider block mb-1">Account Status</label>
                <div class="flex items-center gap-4 mt-2">
                   <button 
                     @click="newUser.status = 'Active'"
                     :class="['px-4 py-2 rounded-lg text-sm font-bold transition', newUser.status === 'Active' ? 'bg-green-600 text-white' : 'bg-[#1E1E1E] text-gray-400 border border-gray-600']"
                   >
                     Active
                   </button>
                   <button 
                     @click="newUser.status = 'Inactive'"
                     :class="['px-4 py-2 rounded-lg text-sm font-bold transition', newUser.status === 'Inactive' ? 'bg-red-600 text-white' : 'bg-[#1E1E1E] text-gray-400 border border-gray-600']"
                   >
                     Inactive
                   </button>
                </div>
             </div>
          </div>
          <div class="p-4 border-t border-gray-700 bg-[#333] flex justify-end gap-3">
             <button @click="showUserModal = false" class="px-4 py-2 text-gray-400 hover:text-white transition">Cancel</button>
             <button @click="saveUser" class="px-6 py-2 bg-[#d4a017] hover:bg-[#b88b14] text-black font-bold rounded-lg transition">{{ isEditing ? 'Save Changes' : 'Create Account' }}</button>
          </div>
       </div>
    </div>
    
    <!-- Edit Form Modal -->
    <div v-if="showFormEditor" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
       <div class="bg-[#2A2A2A] w-full max-w-4xl h-[90vh] rounded-2xl border border-gray-700 overflow-hidden shadow-2xl animate-zoom-in flex flex-col">
          <!-- Header -->
          <div class="p-6 border-b border-gray-700 bg-[#333] flex justify-between items-center">
             <div class="flex items-center gap-3">
                <div class="p-2 bg-[#d4a017]/10 rounded-lg">
                   <svg class="w-6 h-6 text-[#d4a017]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                </div>
                <div>
                   <h3 class="text-xl font-bold text-white">Edit {{ activeForm?.name }}</h3>
                   <p class="text-xs text-gray-400">Configure form fields and validation</p>
                </div>
             </div>
             <button @click="showFormEditor = false" class="text-gray-400 hover:text-white">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
             </button>
          </div>
          
          <!-- Content -->
          <div class="flex-1 overflow-y-auto p-8">
             <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Preview Section -->
                <div class="lg:col-span-2 space-y-6">
                   <div class="bg-[#1E1E1E] border border-dashed border-gray-700 rounded-xl p-8 relative">
                      <span class="absolute top-0 right-0 bg-gray-700 text-xs px-2 py-1 rounded-bl-lg text-gray-300">Preview</span>
                      
                      <!-- Common Fields (Read Only) -->
                      <div class="grid grid-cols-2 gap-4 mb-6 opacity-60">
                         <div class="space-y-2">
                             <label class="text-xs text-gray-500 uppercase font-bold">Name</label>
                             <div class="h-10 bg-[#2A2A2A] rounded-lg border border-gray-700"></div>
                         </div>
                         <div class="space-y-2">
                             <label class="text-xs text-gray-500 uppercase font-bold">Date Filed</label>
                             <div class="h-10 bg-[#2A2A2A] rounded-lg border border-gray-700"></div>
                         </div>
                      </div>

                      <!-- Dynamic Fields -->
                      <div class="space-y-4">
                         <div v-for="(field, index) in activeFormFields" :key="index" class="relative group p-4 border border-transparent hover:border-[#d4a017] rounded-xl transition bg-[#252525]">
                            
                            <!-- Field Controls -->
                            <div class="absolute -top-3 -right-3 hidden group-hover:flex gap-1">
                               <button @click="removeField(index)" class="p-1.5 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
                            </div>

                            <label class="text-xs text-[#d4a017] uppercase tracking-wider block mb-2">{{ field.label }} <span v-if="field.required" class="text-red-500">*</span></label>
                            
                            <!-- Input Type Preview -->
                            <input v-if="field.type === 'text' || field.type === 'number' || field.type === 'date'" :type="field.type" disabled class="w-full bg-[#333] border border-gray-600 rounded-lg px-4 py-2 text-gray-400 italic" :placeholder="`User inputs ${field.label}...`">
                            <textarea v-if="field.type === 'textarea'" disabled rows="3" class="w-full bg-[#333] border border-gray-600 rounded-lg px-4 py-2 text-gray-400 italic" :placeholder="`User inputs ${field.label}...`"></textarea>
                            <select v-if="field.type === 'select'" disabled class="w-full bg-[#333] border border-gray-600 rounded-lg px-4 py-2 text-gray-400 italic"><option>Select option...</option></select>
                         </div>
                      </div>
                      
                      <div v-if="activeFormFields.length === 0" class="text-center py-10 text-gray-500">
                         No custom fields added yet.
                      </div>

                   </div>
                </div>

                <!-- Settings Section -->
                <div class="space-y-6">
                   <div class="bg-[#252525] p-6 rounded-xl border border-gray-700">
                      <h4 class="font-bold text-white mb-4">Add New Field</h4>
                      <div class="space-y-4">
                         <div>
                            <label class="text-xs text-gray-400 uppercase tracking-wider block mb-1">Field Type</label>
                            <select v-model="newField.type" class="w-full bg-[#1E1E1E] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#d4a017]">
                               <option value="text">Text Input</option>
                               <option value="number">Number Input</option>
                               <option value="date">Date Picker</option>
                               <option value="textarea">Text Area</option>
                               <option value="select">Dropdown</option>
                            </select>
                         </div>
                         <div>
                            <label class="text-xs text-gray-400 uppercase tracking-wider block mb-1">Label Name</label>
                            <input type="text" v-model="newField.label" class="w-full bg-[#1E1E1E] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#d4a017]" placeholder="e.g. Reason">
                         </div>
                         <div class="flex items-center gap-2">
                             <input type="checkbox" v-model="newField.required" id="req" class="w-4 h-4 rounded border-gray-600 bg-[#1E1E1E] text-[#d4a017] focus:ring-[#d4a017]">
                             <label for="req" class="text-sm text-gray-300">Required Field</label>
                         </div>
                         <button @click="addField" class="w-full py-2 bg-[#d4a017] hover:bg-[#b88b14] text-black font-bold rounded-lg transition mt-2">Add Field</button>
                      </div>
                   </div>
                   
                   <div class="bg-blue-500/10 border border-blue-500/30 p-4 rounded-xl">
                      <p class="text-xs text-blue-200">
                         <span class="font-bold block mb-1">Note:</span>
                         Common fields like <strong>Name, Date Filed, Position, Department</strong> are included automatically on all forms.
                      </p>
                   </div>
                </div>
             </div>
          </div>

          <!-- Footer -->
          <div class="p-6 border-t border-gray-700 bg-[#333] flex justify-end gap-3">
             <button @click="showFormEditor = false" class="px-6 py-2 text-gray-400 hover:text-white transition">Cancel</button>
             <button @click="saveFormConfig" class="px-8 py-2 bg-[#d4a017] hover:bg-[#b88b14] text-black font-bold rounded-lg transition shadow-lg">Save Configuration</button>
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
  name: "AdminDashboard",
  data() {
    return {
      activeTab: 'User Management',
      userCategory: 'Staff', // 'Staff' or 'Employees'
      showUserModal: false,
      isEditing: false,
      showFormEditor: false,
      activeForm: null,
      selectedForm: null,
      activeFormFields: [],
      newField: {
         type: 'text',
         label: '',
         required: false
      },
      allRequests: [],
      users: [],
      userData: { first_name: 'System', last_name: 'Admin' },
      formTypes: [
        { 
           id: 1, 
           name: 'Leave Request', 
           updated: 'Jan 10, 2026', 
           isActive: true,
           fields: [
              { type: 'date', label: 'Leave Date', required: true },
              { type: 'select', label: 'Leave Type', required: true }, // Should have options in real app
              { type: 'textarea', label: 'Reason', required: true }
           ]
        },
        { 
           id: 2, 
           name: 'Overtime Request', 
           updated: 'Dec 15, 2025', 
           isActive: true,
           fields: [
              { type: 'date', label: 'Overtime Date', required: true },
              { type: 'number', label: 'No. of Hours', required: true },
              { type: 'textarea', label: 'Reason', required: true }
           ]
        },
        { 
           id: 3, 
           name: 'Shift Swap Request', 
           updated: 'Jan 22, 2026', 
           isActive: true,
           fields: [
              { type: 'date', label: 'Swap Date From', required: true },
              { type: 'date', label: 'Swap Date To', required: true },
              { type: 'textarea', label: 'Reason', required: true }
           ]
        },
        { 
           id: 4, 
           name: 'Undertime Request', 
           updated: 'Nov 30, 2025', 
           isActive: true,
           fields: [
              { type: 'date', label: 'Undertime Date', required: true },
              { type: 'number', label: 'No. of Hours', required: true },
              { type: 'textarea', label: 'Reason', required: true }
           ]
        },
      ],
      payslips: [
        { id: 101, employee: 'Raque Canete', period: 'Jan 1-15, 2026', netPay: '₱ 12,500.00', generated: 'Jan 16, 2026' },
        { id: 102, employee: 'John Doe', period: 'Jan 1-15, 2026', netPay: '₱ 14,200.00', generated: 'Jan 16, 2026' },
      ],
      newUser: {
         id: null,
         companyId: '',
         firstName: '',
         middleName: '',
         lastName: '',
         birthdate: '',
         email: '',
         role: 'Employee',
         department: '',
         status: 'Active'
      },
      showLogoutModal: false
    };
  },
  computed: {
    filteredUsers() {
      if (this.userCategory === 'Employees') {
        return this.users.filter(u => u.role === 'Employee');
      } else {
        // Staff includes everyone NOT 'Employee'
        return this.users.filter(u => u.role !== 'Employee');
      }
    },
    filteredRequests() {
       if (!this.selectedForm) return [];
       return this.allRequests.filter(req => req.type === this.selectedForm.name);
    }
  },
  mounted() {
      this.initUser();
      this.fetchUsers();
      this.fetchRequests();
  },
  methods: {
    viewFormRequests(form) {
       this.selectedForm = form;
    },
    getRequestCount(formType) {
       return this.allRequests.filter(r => r.formType === formType).length;
    },
    getStatusColor(status) {
      switch(status) {
        case 'Approved': return 'bg-green-500/20 text-green-500 border-green-500/20';
        case 'Pending': return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/20';
        case 'Rejected': return 'bg-red-500/20 text-red-500 border-red-500/20';
        default: return 'bg-gray-500/20 text-gray-500';
      }
    },
    handleLogout() {
       this.showLogoutModal = true;
    },
    confirmLogout() {
       localStorage.removeItem('token');
       localStorage.removeItem('user');
       this.$router.push('/login');
    },
    openUserModal() {
       this.isEditing = false;
       this.showUserModal = true;
       this.newUser = { companyId: '', firstName: '', middleName: '', lastName: '', birthdate: '', email: '', role: 'Employee', department: '', status: 'Active' };
    },
    editUser(user) {
       this.isEditing = true;
       this.showUserModal = true;
       // Clone the user data to avoid direct mutation before saving
       // Ensure all fields are present to prevent undefined errors
       this.newUser = { 
          id: user.id,
          companyId: user.companyId || '',
          firstName: user.firstName || user.name.split(' ')[0], 
          middleName: user.middleName || '', 
          lastName: user.lastName || user.name.split(' ').pop(), 
          birthdate: user.birthdate || '', 
          email: user.email, 
          role: user.role, 
          department: user.department,
          status: user.status || 'Active'
       };
    },
    async saveUser() {
       if(!this.newUser.companyId || !this.newUser.firstName || !this.newUser.lastName || !this.newUser.email || !this.newUser.birthdate) {
          alert("Please fill in required fields (Company ID, First Name, Last Name, Birthdate, Email).");
          return;
       }
       
       const userData = { ...this.newUser };
       
       // Process Data: Capitalize Names
       const capitalize = (s) => s ? s.replace(/\b\w/g, c => c.toUpperCase()) : '';
       userData.firstName = capitalize(userData.firstName);
       userData.middleName = capitalize(userData.middleName);
       userData.lastName = capitalize(userData.lastName);

       // Process Data: Company ID Prefix
       if (userData.companyId && !userData.companyId.toUpperCase().startsWith('WT-')) {
          userData.companyId = 'WT-' + userData.companyId;
       }

       try {
           if (this.isEditing) {
               // Update existing user
               const response = await fetch(`http://localhost:3000/users/${userData.id}`, {
                   method: 'PUT',
                   headers: { 'Content-Type': 'application/json' },
                   body: JSON.stringify(userData)
               });
               
               if (!response.ok) throw new Error('Failed to update user');
               
               alert('User updated successfully!');
           } else {
               // Create new user (Backend handles ID generation)
               const response = await fetch('http://localhost:3000/users', {
                   method: 'POST',
                   headers: { 'Content-Type': 'application/json' },
                   body: JSON.stringify(userData)
               });
               
               const data = await response.json();
               if (!response.ok) throw new Error(data.error || 'Failed to create user');
               
               // Show generated credentials
               alert(`User Created Successfully!\n\nCompany ID: ${data.user.company_id}\nDefault Password: ${data.user.tempPassword}\n\nPlease share this with the employee.`);
           }

           // Refresh list and close modal
           this.fetchUsers();
           this.showUserModal = false;

       } catch (error) {
           console.error("Error saving user:", error);
           alert(error.message);
       }
    },
    async fetchUsers() {
        try {
            const response = await fetch('http://localhost:3000/users');
            const data = await response.json();
            
            // Format data for display
            this.users = data.map(u => ({
                id: u.id,
                companyId: u.company_id, // Store for display
                firstName: u.first_name,
                lastName: u.last_name,
                name: `${u.first_name} ${u.last_name}`,
                email: u.email,
                role: u.role,
                department: u.department || 'N/A',
                status: u.status,
                initials: (u.first_name[0] + u.last_name[0]).toUpperCase(),
                birthdate: u.birthdate // Keep raw if needed, or format
            }));
        } catch (error) {
            console.error("Failed to fetch users:", error);
        }
    },
    toggleFormStatus(form) {
       form.isActive = !form.isActive;
       // In a real app, this would make an API call to update the configuration
       alert(`Form "${form.name}" has been ${form.isActive ? 'enabled' : 'disabled'}.`);
    },
    openFormEditor(form) {
       this.activeForm = form;
       // Clone fields to avoid direct mutation
       this.activeFormFields = JSON.parse(JSON.stringify(form.fields || []));
       this.showFormEditor = true;
    },
    addField() {
       if(!this.newField.label) {
          alert("Please enter a label name.");
          return;
       }
       this.activeFormFields.push({ ...this.newField });
       this.newField = { type: 'text', label: '', required: false }; // Reset
    },
    removeField(index) {
       this.activeFormFields.splice(index, 1);
    },
    saveFormConfig() {
       // Find the form and update its fields
       const formIndex = this.formTypes.findIndex(f => f.id === this.activeForm.id);
       if (formIndex !== -1) {
          this.formTypes[formIndex].fields = this.activeFormFields;
          this.formTypes[formIndex].updated = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
       }
       alert(`Configuration for ${this.activeForm.name} saved successfully!`);
       this.showFormEditor = false;
    },
    async fetchRequests() {
        try {
            const response = await fetch('http://localhost:3000/requests');
            const data = await response.json();
            this.allRequests = data.map(r => ({
                id: r.id,
                type: r.type,
                employee: `${r.first_name} ${r.last_name}`,
                dateFiled: new Date(r.created_at).toLocaleDateString(),
                status: r.status,
                dh_status: r.dh_status,
                dh_approved_by: r.dh_approved_by,
                details: {
                    reason: r.reason,
                    dates: r.meta_data ? Object.values(JSON.parse(r.meta_data)).join(' - ') : ''
                }
            }));
        } catch (error) {
            console.error("Failed to fetch requests:", error);
        }
    },
    initUser() {
        const userStr = localStorage.getItem('user');
        if (userStr) {
            this.userData = JSON.parse(userStr);
        }
    },
    async approveRequest(id, status) {
        if (!confirm(`Are you sure you want to mark this as ${status}?`)) return;
        
        try {
            const response = await fetch(`http://localhost:3000/requests/${id}/status`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    status: status,
                    role: 'Admin',
                    adminName: `${this.userData.first_name} ${this.userData.last_name}`
                })
            });
            
            if (response.ok) {
                alert(`Request ${status} successfully!`);
                this.fetchRequests();
            } else {
                throw new Error("Failed to update status");
            }
        } catch (error) {
            alert(error.message);
        }
    }
  }
};
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-zoom-in {
  animation: zoomIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes zoomIn {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
</style>
