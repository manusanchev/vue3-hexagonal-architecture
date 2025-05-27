<script setup lang="ts">
import { onUnmounted } from 'vue'
import { useDropdown } from './useDropdown.ts'

interface Props {
  id?: string
}

const props = defineProps<Props>()

const { isOpen, toggleDropdown, closeDropdown, cleanup } = useDropdown(props.id)

// Cleanup when component is unmounted
onUnmounted(() => {
  cleanup()
})

defineExpose({
  closeDropdown
})
</script>

<template>
  <div class="relative">
    <!-- Backdrop to close dropdown when clicking outside -->
    <div
      v-if="isOpen"
      @click="closeDropdown"
      class="fixed inset-0 z-40"
    ></div>

    <!-- Trigger slot -->
    <div @click="toggleDropdown" class="relative z-50">
      <slot name="trigger" />
    </div>

    <!-- Dropdown menu -->
    <div
      v-if="isOpen"
      class="absolute right-0 top-8 bg-white border border-neutral-200 rounded-lg shadow-lg z-90"
    >
      <div class="py-1">
        <slot name="content" :close="closeDropdown" />
      </div>
    </div>
  </div>
</template>
