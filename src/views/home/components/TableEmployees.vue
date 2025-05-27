<script setup lang="ts">
import VTable from '@/components/table/VTable.vue'
import VTableHeader from '@/components/table/VTableHeader.vue'
import VTableRow from '@/components/table/VTableRow.vue'
import VTableCell from '@/components/table/VTableCell.vue'
import VLoader from '@/components/loader/VLoader.vue'
import { computed } from 'vue'
import { useHomeStore } from '@/stores/home.ts'

const homeStore = useHomeStore()
const employees = computed(() => homeStore.employees)
const isLoading = computed(() => homeStore.isLoading)
</script>

<template>
  <VTable>
    <VTableHeader>
      <VTableCell>Nombre</VTableCell>
      <VTableCell>Teléfono</VTableCell>
      <VTableCell>Usuario</VTableCell>
      <VTableCell>Web</VTableCell>
    </VTableHeader>
    <div v-if="isLoading" class="flex justify-center py-8">
      <VLoader />
    </div>
    <template v-else>
      <VTableRow v-for="(item, index) in employees" :key="index">
        <VTableCell>{{ item.name }}</VTableCell>
        <VTableCell>{{ item.phone }}</VTableCell>
        <VTableCell>{{ item.username }}</VTableCell>
        <VTableCell>{{ item.website }}</VTableCell>
      </VTableRow>
    </template>
  </VTable>
</template>
