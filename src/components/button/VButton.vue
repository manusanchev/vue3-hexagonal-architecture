<script setup lang="ts">
import { computed } from 'vue'
import VLoader from '@/components/loader/VLoader.vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'small' | 'medium' | 'large'
  loading?: boolean
}

const variantClasses = {
  primary: 'bg-neutral-900 text-white hover:bg-neutral-800',
  secondary: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200',
  tertiary: 'bg-transparent text-neutral-900 hover:bg-neutral-100',
}

const sizeClasses = {
  small: 'px-2 py-0.5 text-xs',
  medium: 'px-4 py-1.5 text-sm',
  large: 'px-6 py-2  text-sm',
}

const disabledClasses = {
  primary: 'bg-neutral-700 cursor-not-allowed',
  secondary: 'bg-neutral-50 cursor-not-allowed',
  tertiary: 'bg-neutral-100 cursor-not-allowed',
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'medium',
  loading: false,
})

const classes = computed(() => {
  return [
    { [variantClasses[props.variant]]: !props.loading },
    sizeClasses[props.size],
    { [disabledClasses[props.variant]]: props.loading },
  ]
})
</script>

<template>
  <button
    v-bind="$attrs"
    class="rounded-lg transition cursor-pointer relative"
    :class="classes"
    :disabled="props.loading"
  >
    <VLoader class="absolute top-0 left-0 right-0 bottom-0" v-if="props.loading" />
    <span :class="{ invisible: props.loading }">
      <slot />
    </span>
  </button>
</template>
