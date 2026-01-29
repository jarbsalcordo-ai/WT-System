<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="space-y-2">
      <label class="text-xs text-gray-400 uppercase tracking-wider">Swap Date From:</label>
      <input 
        type="date" 
        :value="modelValue.swapDateFrom" 
        @input="updateFrom"
        class="w-full bg-[#333] border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition text-sm" 
      />
    </div>

    <div class="space-y-2">
      <label class="text-xs text-gray-400 uppercase tracking-wider">To:</label>
      <input 
        type="date" 
        :value="modelValue.swapDateTo" 
        @input="updateTo"
        class="w-full bg-[#333] border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition text-sm" 
      />
    </div>

    <div class="md:col-span-2 space-y-2">
      <label class="text-xs text-gray-400 uppercase tracking-wider">No of Days:</label>
      <input 
        type="number" 
        :value="modelValue.noOfDays" 
        @input="$emit('update:modelValue', { ...modelValue, noOfDays: $event.target.value })"
        class="w-full bg-[#333] border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition" 
        readonly
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "SwapRequest",
  props: {
    modelValue: {
      type: Object,
      required: true
    }
  },
  emits: ['update:modelValue'],
  methods: {
    calculateDays(from, to) {
        if (!from || !to) return '';
        const d1 = new Date(from);
        const d2 = new Date(to);
        const diffTime = d2 - d1;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        return diffDays >= 0 ? diffDays + 1 : 0;
    },
    updateFrom(e) {
        const val = e.target.value;
        const days = this.calculateDays(val, this.modelValue.swapDateTo);
        this.$emit('update:modelValue', { ...this.modelValue, swapDateFrom: val, noOfDays: days });
    },
    updateTo(e) {
        const val = e.target.value;
        const days = this.calculateDays(this.modelValue.swapDateFrom, val);
        this.$emit('update:modelValue', { ...this.modelValue, swapDateTo: val, noOfDays: days });
    }
  }
}
</script>
