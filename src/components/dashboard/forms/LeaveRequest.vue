<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
     <div class="space-y-2">
       <label class="text-xs text-gray-400 uppercase tracking-wider">Leave Date:</label>
       <input 
         type="date" 
         :value="modelValue.leaveDate"
         @input="$emit('update:modelValue', { ...modelValue, leaveDate: $event.target.value })"
         class="w-full bg-[#333] border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition" 
       />
     </div>
     <div class="space-y-2">
       <label class="text-xs text-gray-400 uppercase tracking-wider">Leave Type:</label>
       <select 
         :value="modelValue.leaveType"
         @change="$emit('update:modelValue', { ...modelValue, leaveType: $event.target.value })"
         class="w-full bg-[#333] border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition"
       >
         <option value="" disabled>Select Type</option>
         <option>Sick Leave</option>
         <option>Vacation Leave</option>
         <option>Emergency Leave</option>
         <option>Maternity/Paternity Leave</option>
       </select>
     </div>
  </div>
</template>

<script>
export default {
  name: "LeaveRequest",
  props: {
    modelValue: {
      type: Object,
      required: true
    }
  },
  emits: ['update:modelValue']
}
</script>
