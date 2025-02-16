<script setup lang="ts">
import VModalClose from '@/components/modal/VModalClose.vue'
import { useAttrs } from 'vue'
import VModal from '@/components/modal/VModal.vue'
import { useModal } from '@/components/modal/useModal.ts'
import type { ModalTypes } from '@/components/modal/ModalTypes.ts'
import VModalHeader from '@/components/modal/VModalHeader.vue'
import VModalContent from '@/components/modal/VModalContent.vue'
import VModalFooter from '@/components/modal/VModalFooter.vue'
import VButton from '@/components/button/VButton.vue'

defineProps({
  confirmButtonText: {
    type: String,
    default: 'Confirmar',
  },
  cancelButtonText: {
    type: String,
    default: 'Cancelar',
  },
})

const $attrs = useAttrs()
const modal = useModal()

const emit = defineEmits(['close', 'confirm'])

const handleClose = () => {
  if ($attrs.id) {
    modal.close($attrs.id as ModalTypes)
    emit('close')
  }
}

const onConfirm = () => {
  emit('confirm')
}
</script>

<template>
  <VModal v-bind="$attrs">
    <VModalClose @click="handleClose" />
    <VModalHeader>
      <slot name="header" />
    </VModalHeader>
    <VModalContent>
      <slot />
    </VModalContent>
    <VModalFooter>
      <VButton variant="tertiary" @click="handleClose"> {{ cancelButtonText }}</VButton>
      <VButton type="submit" variant="primary" @click="onConfirm">
        {{ confirmButtonText }}
      </VButton>
    </VModalFooter>
  </VModal>
</template>
