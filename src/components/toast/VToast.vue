<script setup lang="ts">
import { useToast } from '@/components/toast/useToast.ts'

const { toasts } = useToast()
</script>

<template>
  <TransitionGroup name="toast" tag="div" class="flex flex-col gap-y-4 fixed top-4 right-4">
    <div
      v-for="toast in toasts"
      :key="toast.id"
      class="min-w-[15rem] rounded-lg flex items-center justify-center gap-x-2 p-6 shadow border border-neutral-400 text-neutral-800"
    >
      {{ toast.title }}
    </div>
  </TransitionGroup>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.5s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
