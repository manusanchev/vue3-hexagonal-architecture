<script setup lang="ts">
import VButton from '@/components/button/VButton.vue'
import { onMounted } from 'vue'
import { useFetchEmployees } from '@/views/home/composables/useFetchEmployees.ts'
import { useHomeStore } from '@/stores/home.ts'
import { useModal } from '@/components/modal/useModal.ts'
import { ModalTypes } from '@/components/modal/ModalTypes.ts'
import CreateEmployeeModal from '@/views/home/components/CreateEmployeeModal.vue'
import TableEmployees from '@/views/home/components/TableEmployees.vue'

const homeStore = useHomeStore()

const { loadEmployees } = useFetchEmployees()
const modal = useModal()
onMounted(async () => {
  await loadEmployees()
})

const showModal = () => {
  modal.show(ModalTypes.ADD_EMPLOYEE_MODAL)
}
</script>

<template>
  <div class="mx-auto w-full">
    <div class="mx-auto w-full max-w-2xl mt-4">
      <div class="flex gap-x-4 items-center justify-between">
        <h1 class="font-medium">Empleados ({{ homeStore.countEmployees }})</h1>
        <VButton @click="showModal"> Añadir </VButton>
        <CreateEmployeeModal />
      </div>
      <div class="mt-4">
        <TableEmployees />
      </div>
    </div>
  </div>
</template>
