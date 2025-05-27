<script setup lang="ts">
import VTable from '@/components/table/VTable.vue'
import VTableHeader from '@/components/table/VTableHeader.vue'
import VTableRow from '@/components/table/VTableRow.vue'
import VTableCell from '@/components/table/VTableCell.vue'
import VLoader from '@/components/loader/VLoader.vue'
import VTooltip from '@/components/tooltip/VTooltip.vue'
import TableEmployeeActions from './TableEmployeeActions.vue'
import { computed } from 'vue'
import { useHomeStore } from '@/stores/home.ts'
import type { Employee } from '@/core/employee/domain/Employee.ts'

const homeStore = useHomeStore()
const employees = computed(() => homeStore.employees)
const isLoading = computed(() => homeStore.isLoading)

const handleEdit = (employee: Employee) => {
  console.log('Edit employee:', employee)
  // TODO: Implement edit logic
}

const handleDelete = (employee: Employee) => {
  console.log('Delete employee:', employee)
  // TODO: Implement delete logic
}
</script>

<template>
  <VTable>
    <VTableHeader>
      <VTableCell>Name</VTableCell>
      <VTableCell>Phone</VTableCell>
      <VTableCell>Username</VTableCell>
      <VTableCell>Website</VTableCell>
    </VTableHeader>
    <div v-if="isLoading" class="flex justify-center py-8">
      <VLoader />
    </div>
    <template v-else>
      <VTableRow v-for="(item, index) in employees" :key="index">
        <VTableCell>{{ item.name }}</VTableCell>
        <VTooltip :text="item.phone">
          <VTableCell>
            {{ item.phone }}
          </VTableCell>
        </VTooltip>
        <VTableCell>{{ item.username }}</VTableCell>
        <VTableCell>{{ item.website }}</VTableCell>
        <TableEmployeeActions
            :employee-id="`employee-${index}`"
            @edit="handleEdit(item)"
            @delete="handleDelete(item)"
        />
      </VTableRow>
    </template>
  </VTable>
</template>
