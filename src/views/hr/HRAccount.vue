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
        <h1 class="text-3xl font-bold">My Account</h1>
        <p class="text-gray-400 text-sm">Manage your personal information and security</p>
      </div>
    </header>

    <div class="max-w-3xl mx-auto bg-[#252525] rounded-[2rem] border border-gray-700 p-8">
       <div class="flex items-center gap-6 mb-8">
          <div class="w-24 h-24 rounded-full bg-[#d4a017] flex items-center justify-center text-3xl font-bold text-black border-4 border-[#1E1E1E] shadow-xl">
             HR
          </div>
          <div>
             <h2 class="text-2xl font-bold">HR Manager</h2>
             <p class="text-gray-400">Human Resources Department</p>
             <div class="mt-2 flex gap-2">
                <span class="px-3 py-1 bg-green-500/20 text-green-500 text-xs rounded-full border border-green-500/30">Active</span>
                <span class="px-3 py-1 bg-blue-500/20 text-blue-500 text-xs rounded-full border border-blue-500/30">Admin Access</span>
             </div>
          </div>
       </div>

       <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-2">
             <label class="text-xs text-gray-500 uppercase font-bold">Full Name</label>
             <div class="bg-[#1E1E1E] p-4 rounded-xl border border-gray-700 text-gray-300">
                HR Manager Name
             </div>
          </div>
          <div class="space-y-2">
             <label class="text-xs text-gray-500 uppercase font-bold">Email Address</label>
             <div class="bg-[#1E1E1E] p-4 rounded-xl border border-gray-700 text-gray-300">
                hr@watchtower.com
             </div>
          </div>
          <div class="space-y-2">
             <label class="text-xs text-gray-500 uppercase font-bold">Employee ID</label>
             <div class="bg-[#1E1E1E] p-4 rounded-xl border border-gray-700 text-gray-300">
                HR-001
             </div>
          </div>
          <div class="space-y-2">
             <label class="text-xs text-gray-500 uppercase font-bold">Role</label>
             <div class="bg-[#1E1E1E] p-4 rounded-xl border border-gray-700 text-gray-300">
                Administrator
             </div>
          </div>
       </div>

       <div class="mt-8 pt-8 border-t border-gray-700">
          <h3 class="text-xl font-bold mb-4">Security</h3>
          <button class="bg-[#d4a017] text-black font-bold px-6 py-3 rounded-xl hover:bg-[#b88b14] transition">
             Change Password
          </button>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HRAccount"
}
</script>
