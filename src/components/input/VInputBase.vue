<script setup lang="ts">
const model = defineModel()
</script>

<template>
  <input
    v-bind="$attrs"
    v-model="model"
    class="block user-invalid:border-red-500 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:ring-1 focus:ring-neutral-900"
  />
</template>
