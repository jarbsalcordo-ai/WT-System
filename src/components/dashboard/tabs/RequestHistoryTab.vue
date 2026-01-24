<template>
  <div class="lg:col-span-2 bg-[#252525] rounded-[2rem] p-8 border border-gray-700 h-[600px] overflow-y-auto">
     <h2 class="text-xl font-bold mb-6 flex items-center gap-2">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-yellow-500">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
       </svg>
       Request History
     </h2>
     
     <div v-if="requests.length === 0" class="text-center py-20">
       <p class="text-gray-500">No requests found.</p>
     </div>

     <div v-else class="space-y-4">
       <div 
         v-for="req in requests" 
         :key="req.id" 
         @click="viewRequest(req)"
         class="bg-[#333] p-6 rounded-xl border border-gray-600 hover:border-yellow-500/50 transition duration-300 cursor-pointer group"
       >
          <div class="flex justify-between items-start mb-3">
             <div>
                <h4 class="font-bold text-white text-lg group-hover:text-yellow-500 transition">{{ req.type }}</h4>
                <p class="text-sm text-gray-400 mt-1">{{ req.date }}</p>
             </div>
             <span :class="['text-xs px-3 py-1 rounded-full border', getStatusColor(req.status)]">{{ req.status }}</span>
          </div>
          <p class="text-gray-300 text-sm line-clamp-2">{{ req.details }}</p>
          <div v-if="req.meta" class="mt-3 text-sm text-[#d4a017]">
             {{ req.meta }}
          </div>
       </div>
     </div>

     <!-- Request Details Modal -->
     <div v-if="showModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div class="bg-[#2A2A2A] w-full max-w-lg rounded-2xl shadow-2xl border border-gray-700 overflow-hidden animate-zoom-in">
           <!-- Modal Header -->
           <div class="flex justify-between items-center p-6 border-b border-gray-700 bg-[#333]">
              <h3 class="text-xl font-bold text-white flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-yellow-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                 </svg>
                 Request Details
              </h3>
              <button @click="closeModal" class="text-gray-400 hover:text-white transition">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                 </svg>
              </button>
           </div>
           
           <!-- Modal Content -->
           <div class="p-8 space-y-6" v-if="selectedRequest">
              <div class="flex items-center justify-between mb-4">
                 <div>
                    <p class="text-xs text-gray-400 uppercase tracking-wider mb-1">Type</p>
                    <p class="text-lg font-bold text-yellow-500">{{ selectedRequest.type }}</p>
                 </div>
                 <span :class="['px-3 py-1 rounded-full text-sm font-medium border', getStatusColor(selectedRequest.status)]">
                    {{ selectedRequest.status }}
                 </span>
              </div>

              <div class="grid grid-cols-2 gap-4">
                 <div class="bg-[#252525] p-4 rounded-xl border border-gray-700">
                    <p class="text-xs text-gray-400 uppercase mb-1">Date Filed</p>
                    <p class="text-white font-medium">{{ selectedRequest.date }}</p>
                 </div>
                 <div class="bg-[#252525] p-4 rounded-xl border border-gray-700">
                    <p class="text-xs text-gray-400 uppercase mb-1">Duration/Time</p>
                    <p class="text-white font-medium">{{ selectedRequest.meta || 'N/A' }}</p>
                 </div>
              </div>

              <div class="bg-[#252525] p-4 rounded-xl border border-gray-700">
                 <p class="text-xs text-gray-400 uppercase mb-2">Reason / Details</p>
                 <p class="text-gray-300 leading-relaxed">{{ selectedRequest.details }}</p>
              </div>

               <!-- Approval Flow Placeholder -->
              <div class="mt-6 border-t border-gray-700 pt-4">
                 <p class="text-xs text-gray-400 uppercase mb-3">Approval Status</p>
                 <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-black font-bold text-xs">HR</div>
                    <div class="h-0.5 flex-1 bg-gray-600"></div>
                     <div class="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold text-xs">SU</div>
                    <div class="h-0.5 flex-1 bg-gray-600"></div>
                     <div class="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-gray-400 font-bold text-xs">OM</div>
                 </div>
                 <div class="flex justify-between text-xs text-gray-500 mt-2">
                    <span>Approved</span>
                    <span>Pending</span>
                    <span>Waiting</span>
                 </div>
              </div>
           </div>
           
           <!-- Modal Footer -->
           <div class="p-6 border-t border-gray-700 bg-[#333] flex justify-end">
              <button @click="closeModal" class="px-6 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition">Close</button>
           </div>
        </div>
     </div>
  </div>
</template>

<script>
export default {
  name: "RequestHistoryTab",
  props: {
    requests: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      showModal: false,
      selectedRequest: null
    }
  },
  methods: {
    viewRequest(req) {
      this.selectedRequest = req;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedRequest = null;
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
}
</script>

<style scoped>
.animate-zoom-in {
  animation: zoomIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes zoomIn {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
</style>
