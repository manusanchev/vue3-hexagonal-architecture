<script setup lang="ts">
import VModalClose from '@/components/modal/VModalClose.vue'
import { useAttrs } from 'vue'
import VModal from '@/components/modal/VModal.vue'
import { useModal } from '@/components/modal/useModal.ts'
import type { ModalTypes } from '@/components/modal/ModalTypes.ts'

const $attrs = useAttrs()
const modal = useModal()

const emit = defineEmits(['close'])

const handleClose = () => {
  if ($attrs.id) {
    modal.close($attrs.id as ModalTypes)
    emit('close')
  }

}
</script>

<template>
  <VModal v-bind="$attrs">
    <VModalClose @click="handleClose" />
    <slot />
  </VModal>
</template>
