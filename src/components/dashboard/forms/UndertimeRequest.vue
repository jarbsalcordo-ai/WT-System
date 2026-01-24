<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
     <div class="space-y-2">
       <label class="text-xs text-gray-400 uppercase tracking-wider">Undertime Date:</label>
       <input 
         type="date" 
         :value="modelValue.undertimeDate"
         @input="$emit('update:modelValue', { ...modelValue, undertimeDate: $event.target.value })"
         class="w-full bg-[#333] border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition" 
       />
     </div>
     <div class="space-y-2">
       <label class="text-xs text-gray-400 uppercase tracking-wider">Hours Short:</label>
       <input 
         type="number" 
         :value="modelValue.undertimeHours"
         @input="$emit('update:modelValue', { ...modelValue, undertimeHours: $event.target.value })"
         placeholder="e.g. 1.0"
         class="w-full bg-[#333] border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition" 
       />
     </div>
  </div>
</template>

<script>
export default {
  name: "UndertimeRequest",
  props: {
    modelValue: {
      type: Object,
      required: true
    }
  },
  emits: ['update:modelValue']
}
</script>
