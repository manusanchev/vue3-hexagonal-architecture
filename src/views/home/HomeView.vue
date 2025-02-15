<script setup lang="ts">
import type { Employee } from '@/core/employee/domain/Employee.ts'
import VButton from '@/components/button/VButton.vue'
import { onMounted, ref } from 'vue'
import { useFetchEmployees } from '@/views/home/composables/useFetchEmployees.ts'

const items = ref<Employee[]>([])

const { loadEmployees } = useFetchEmployees()

onMounted(async () => {
   items.value = await loadEmployees()
})
</script>

<template>
  <div class="mx-auto w-full">
    <div class="mx-auto w-full max-w-2xl mt-4">
      <div class="flex gap-x-4 items-center justify-between">
        <h1 class="font-medium">Empleados</h1>
        <VButton> Añadir </VButton>
      </div>
      <div class="mt-4 flex flex-col gap-y-2">
        <div class="grid grid-cols-4 gap-x-4 px-4 py-1.5 rounded-lg bg-neutral-200 text-sm text-neutral-800 select-none">
          <div>Nombre</div>
          <div>Apellidos</div>
          <div>Email</div>
          <div>Estado</div>
        </div>
        <div v-for="item in items" class="grid grid-cols-4 gap-x-4 px-4 py-1.5">
          <div>{{ item.name }}</div>
          <div>{{ item.phone }}</div>
          <div>{{ item.username }}</div>
          <div>{{ item.website }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
