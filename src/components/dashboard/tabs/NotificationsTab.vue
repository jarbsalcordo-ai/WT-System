<template>
  <div class="lg:col-span-2 bg-[#252525] rounded-[2rem] p-8 border border-gray-700 h-[600px] overflow-y-auto">
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
</template>

<script>
export default {
  name: "NotificationsTab",
  props: {
    notifications: {
      type: Array,
      required: true
    }
  }
}
</script>
