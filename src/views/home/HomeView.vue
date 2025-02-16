<script setup lang="ts">
import VButton from '@/components/button/VButton.vue'
import { computed, onMounted, ref } from 'vue'
import { useFetchEmployees } from '@/views/home/composables/useFetchEmployees.ts'
import { useHomeStore } from '@/stores/home.ts'
import { useModal } from '@/components/modal/useModal.ts'
import { ModalTypes } from '@/components/modal/ModalTypes.ts'
import CreateEmployeeModal from '@/views/home/components/CreateEmployeeModal.vue'


const homeStore = useHomeStore()
const employees = computed(() => homeStore.employees)

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
      <div class="mt-4 flex flex-col gap-y-2">
        <div class="grid grid-cols-4 gap-x-4 px-4 py-1.5 rounded-lg bg-neutral-200 text-sm text-neutral-800 select-none">
          <div>Nombre</div>
          <div>Teléfono</div>
          <div>Usuario</div>
          <div>Web</div>
        </div>
        <div v-for="item in employees" class="grid grid-cols-4 gap-x-4 px-4 py-1.5">
          <div>{{ item.name }}</div>
          <div>{{ item.phone }}</div>
          <div>{{ item.username }}</div>
          <div>{{ item.website }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
