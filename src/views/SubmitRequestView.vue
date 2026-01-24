<template>
  <div class="min-h-screen bg-[#121212] pt-32 pb-12 px-4 sm:px-6 lg:px-8 font-poppins text-white">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
          Submit A Request
        </h1>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Choose the type of request you need to file below. We've streamlined the process to help you get back to what matters.
        </p>
      </div>

      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Sidebar Navigation -->
        <div class="w-full lg:w-1/4 lg:flex-shrink-0">
          <div class="bg-[#1e1e1e] rounded-2xl p-4 shadow-xl border border-gray-800 sticky top-32">
            <h2 class="text-xl font-semibold mb-6 px-4 text-white">Request Type</h2>
            <nav class="space-y-2">
              <button 
                v-for="tab in tabs" 
                :key="tab.id"
                @click="activeTab = tab.id"
                :class="[
                  'w-full flex items-center px-4 py-3 rounded-xl transition-all duration-300 text-left',
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/50 text-yellow-400 font-medium' 
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                ]"
              >
                <!-- <component :is="tab.icon" class="w-5 h-5 mr-3" /> -->
                {{ tab.label }}
              </button>
            </nav>
          </div>
        </div>

        <!-- content Area -->
        <div class="flex-1">
          <div class="bg-[#1e1e1e] rounded-2xl p-6 md:p-8 shadow-xl border border-gray-800 min-h-[500px]">
            <transition name="fade" mode="out-in">
              <div :key="activeTab">
                <component :is="activeComponent" v-model="forms[activeTab]" />
                
                <div class="mt-8 flex justify-end">
                  <button 
                    class="bg-[#d4a017] hover:bg-[#b88b14] text-gray-900 font-bold rounded-xl px-8 py-3 transition shadow-lg flex items-center"
                    @click="submitRequest"
                  >
                    Submit Request
                  </button>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeaveRequest from '../components/dashboard/forms/LeaveRequest.vue';
import OvertimeRequest from '../components/dashboard/forms/OvertimeRequest.vue';
import SwapRequest from '../components/dashboard/forms/SwapRequest.vue';
import UndertimeRequest from '../components/dashboard/forms/UndertimeRequest.vue';

export default {
  name: 'SubmitRequestView',
  components: {
    SwapRequest,
    OvertimeRequest,
    UndertimeRequest,
    LeaveRequest
  },
  data() {
    return {
      activeTab: 'swap',
      forms: {
        swap: { swapDateFrom: '', swapDateTo: '', noOfDays: '' },
        overtime: { overtimeDate: '', overtimeHours: '' },
        undertime: { undertimeDate: '', undertimeHours: '' },
        leave: { leaveDate: '', leaveType: '' }
      },
      tabs: [
        { id: 'swap', label: 'Swapping', component: 'SwapRequest' },
        { id: 'overtime', label: 'Overtime', component: 'OvertimeRequest' },
        { id: 'undertime', label: 'Undertime', component: 'UndertimeRequest' },
        { id: 'leave', label: 'Leave', component: 'LeaveRequest' }
      ]
    }
  },
  computed: {
    activeComponent() {
      const tab = this.tabs.find(t => t.id === this.activeTab)
      return tab ? tab.component : null
    }
  },
  methods: {
    submitRequest() {
      console.log('Submitting request for:', this.activeTab);
      console.log('Data:', this.forms[this.activeTab]);
      alert(`Request for ${this.tabs.find(t => t.id === this.activeTab).label} submitted!`);
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
