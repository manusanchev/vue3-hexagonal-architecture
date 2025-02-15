<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'small' | 'medium' | 'large'
}

const variantClasses = {
  primary: 'bg-neutral-900 text-white hover:bg-neutral-800',
  secondary: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200',
  tertiary: 'bg-transparent text-neutral-900 hover:bg-neutral-100',
}

const sizeClasses = {
  small: 'px-2 py-0.5 text-xs',
  medium: 'px-4 py-1.5 text-sm',
  large: 'px-6 py-2',
}


const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'medium',
})

const classes = computed(() => {
  return [
    variantClasses[props.variant],
    sizeClasses[props.size],
  ]
})
</script>

<template>
  <button class="rounded-lg transition cursor-pointer" :class="classes">
    <slot />
  </button>
</template>
