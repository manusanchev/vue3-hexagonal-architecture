<script setup lang="ts">
import VInputLabel from '@/components/input/VInputLabel.vue'
import VInputBase from '@/components/input/VInputBase.vue'

defineProps({
  id: {
    type: String,
    required: true,
  },
})

const model = defineModel()

</script>

<template>
  <VInputLabel :for="id">
    <slot />
    <VInputBase :id="id" v-bind="$attrs" v-model="model" />
  </VInputLabel>
</template>
