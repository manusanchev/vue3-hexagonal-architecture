<script setup lang="ts">
import { MoreVertical, Edit, Trash2 } from 'lucide-vue-next'
import VDropdown from '@/components/dropdown/VDropdown.vue'

interface Props {
  employeeId: string
}

interface Emits {
  edit: []
  delete: []
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const handleEdit = (close: () => void) => {
  emit('edit')
  close()
}

const handleDelete = (close: () => void) => {
  emit('delete')
  close()
}
</script>

<template>
  <VDropdown :id="`dropdown-${props.employeeId}`">
    <!-- Trigger: Three dots button -->
    <template #trigger>
      <button class="p-1.5 rounded-full hover:bg-neutral-300 transition-colors duration-200">
        <MoreVertical class="h-4 w-4 text-neutral-600" />
      </button>
    </template>

    <!-- Content: Edit and Delete options -->
    <template #content="{ close }">
      <div class="w-32">
        <!-- Edit option -->
        <button
          @click="handleEdit(close)"
          class="flex items-center w-full px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors duration-200"
        >
          <Edit class="h-4 w-4 mr-2" />
          Edit
        </button>

        <!-- Delete option -->
        <button
          @click="handleDelete(close)"
          class="flex items-center w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
        >
          <Trash2 class="h-4 w-4 mr-2" />
          Delete
        </button>
      </div>
    </template>
  </VDropdown>
</template>
