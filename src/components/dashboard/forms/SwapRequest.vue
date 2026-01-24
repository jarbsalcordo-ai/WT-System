<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="space-y-2">
      <label class="text-xs text-gray-400 uppercase tracking-wider">Swap Date From:</label>
      <input 
        type="date" 
        :value="modelValue.swapDateFrom" 
        @input="$emit('update:modelValue', { ...modelValue, swapDateFrom: $event.target.value })"
        class="w-full bg-[#333] border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition text-sm" 
      />
    </div>

    <div class="space-y-2">
      <label class="text-xs text-gray-400 uppercase tracking-wider">To:</label>
      <input 
        type="date" 
        :value="modelValue.swapDateTo" 
        @input="$emit('update:modelValue', { ...modelValue, swapDateTo: $event.target.value })"
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
  emits: ['update:modelValue']
}
</script>
