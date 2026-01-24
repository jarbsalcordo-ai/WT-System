<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
     <div class="space-y-2">
       <label class="text-xs text-gray-400 uppercase tracking-wider">Overtime Date:</label>
       <input 
         type="date" 
         :value="modelValue.overtimeDate"
         @input="$emit('update:modelValue', { ...modelValue, overtimeDate: $event.target.value })"
         class="w-full bg-[#333] border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition" 
       />
     </div>
     <div class="space-y-2">
       <label class="text-xs text-gray-400 uppercase tracking-wider">No. of Hours:</label>
       <input 
         type="number" 
         :value="modelValue.overtimeHours"
         @input="$emit('update:modelValue', { ...modelValue, overtimeHours: $event.target.value })"
         placeholder="e.g. 2.5"
         class="w-full bg-[#333] border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition" 
       />
     </div>
  </div>
</template>

<script>
export default {
  name: "OvertimeRequest",
  props: {
    modelValue: {
      type: Object,
      required: true
    }
  },
  emits: ['update:modelValue']
}
</script>
