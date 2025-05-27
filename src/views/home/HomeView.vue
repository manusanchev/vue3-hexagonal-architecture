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
        <div class="flex flex-col gap-y-1">
          <div class="flex items-center gap-x-3">
            <h1 class="text-2xl font-semibold text-neutral-900">Employees</h1>
            <span class="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-800">
              {{ homeStore.countEmployees }}
            </span>
          </div>
          <p class="text-sm text-neutral-600">Manage your team members and their information</p>
        </div>
        <VButton @click="showModal"> Add </VButton>
        <CreateEmployeeModal />
      </div>
      <div class="mt-4">
        <TableEmployees />
      </div>
    </div>
  </div>
</template>
