<template>
  <div class="lg:col-span-2 bg-[#252525] rounded-[2rem] p-8 border border-gray-700">
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
         <input type="text" v-model="internalFormData.name" readonly class="w-full bg-[#333] border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none transition opacity-60 cursor-not-allowed" />
       </div>
       
       <div class="space-y-2">
         <label class="text-xs text-gray-400 uppercase tracking-wider">Date Filed:</label>
         <input type="date" v-model="internalFormData.dateFiled" readonly class="w-full bg-[#333] border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none transition opacity-60 cursor-not-allowed" />
       </div>

       <div class="space-y-2">
         <label class="text-xs text-gray-400 uppercase tracking-wider">Position:</label>
         <input type="text" v-model="internalFormData.position" readonly class="w-full bg-[#333] border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none transition opacity-60 cursor-not-allowed" />
       </div>

       <div class="space-y-2">
         <label class="text-xs text-gray-400 uppercase tracking-wider">Department:</label>
         <input type="text" v-model="internalFormData.department" readonly class="w-full bg-[#333] border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none transition opacity-60 cursor-not-allowed" />
       </div>
       
       <!-- Dynamic Form Fields -->
       <component :is="activeFormTabComponent" v-model="internalFormData" />

       <!-- Reason Field (Always visible) -->
       <div class="md:col-span-2 space-y-2 mt-6">
         <label class="text-xs text-gray-400 uppercase tracking-wider">Reason:</label>
         <textarea v-model="internalFormData.reason" rows="4" class="w-full bg-[#333] border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition resize-none"></textarea>
       </div>
    </div>

    <div class="flex justify-end">
      <button @click="submit" class="bg-[#d4a017] hover:bg-[#b88b14] text-black font-bold py-3 px-8 rounded-xl transition shadow-lg transform hover:scale-105">
        Submit Request
      </button>
    </div>
  </div>
</template>

<script>
import LeaveRequest from '@/components/dashboard/forms/LeaveRequest.vue';
import OvertimeRequest from '@/components/dashboard/forms/OvertimeRequest.vue';
import SwapRequest from '@/components/dashboard/forms/SwapRequest.vue';
import UndertimeRequest from '@/components/dashboard/forms/UndertimeRequest.vue';

export default {
  name: "RequestFormsTab",
  components: {
    SwapRequest,
    LeaveRequest,
    OvertimeRequest,
    UndertimeRequest
  },
  props: {
    formData: {
      type: Object,
      required: true
    }
  },
  emits: ['submit', 'update:formData'],
  data() {
    return {
      activeFormTab: 'SwapRequest'
    }
  },
  computed: {
    internalFormData: {
      get() {
        return this.formData;
      },
      set(value) {
        this.$emit('update:formData', value);
      }
    },
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
  methods: {
    submit() {
      this.$emit('submit', this.activeFormTab);
    }
  }
}
</script>
