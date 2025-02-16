<script setup lang="ts">
import { ModalTypes } from '@/components/modal/ModalTypes.ts'
import VModalComplete from '@/components/modal/variants/VModalComplete.vue'
import VInputWithLabel from '@/components/input/variants/VInputWithLabel.vue'
import { useSaveEmployee } from '@/views/home/composables/useSaveEmployee.ts'
import { reactive, type Ref, ref } from 'vue'
import VModalHeader from '@/components/modal/VModalHeader.vue'
import VModal from '@/components/modal/VModal.vue'
import VModalContent from '@/components/modal/VModalContent.vue'
import VModalClose from '@/components/modal/VModalClose.vue'
import VModalFooter from '@/components/modal/VModalFooter.vue'
import VButton from '@/components/button/VButton.vue'
import { useModal } from '@/components/modal/useModal.ts'
import type { Employee } from '@/core/employee/domain/Employee.ts'

const MODAL_ID = ModalTypes.ADD_EMPLOYEE_MODAL

const { saveEmployee, isLoading, formErrors } = useSaveEmployee()
const { close } = useModal()

const employeeInitialState: Employee = {
  name: '',
  phone: '',
  username: '',
  website: '',
}

const handleClose = () => {
  employee.value = structuredClone(employeeInitialState)
  close(MODAL_ID)
}
const employee: Ref<Employee> = ref(structuredClone(employeeInitialState))

const handleConfirm = async () => {
  const { hasErrors } = await saveEmployee(employee.value)
  if (!hasErrors) {
    handleClose()
  }
}
</script>

<template>
  <VModal :id="MODAL_ID">
    <VModalClose @click="handleClose" />
    <VModalHeader> Añadir empleado </VModalHeader>
    <form @submit.prevent="handleConfirm">
      <VModalContent class="flex flex-col gap-y-6">
        <VInputWithLabel id="name" placeholder="Nombre" v-model="employee.name" required>
          Nombre
        </VInputWithLabel>
        <VInputWithLabel id="phone" placeholder="Teléfono" v-model="employee.phone" required>
          Teléfono
        </VInputWithLabel>
        <VInputWithLabel id="user" placeholder="Usuario" v-model="employee.username" required>
          Usuario
        </VInputWithLabel>
        <VInputWithLabel id="web" placeholder="Web" v-model="employee.website" required>
          Web
        </VInputWithLabel>
      </VModalContent>
      <VModalFooter>
        <VButton type="button" variant="tertiary" @click="handleClose"> cancelar </VButton>
        <VButton :loading="isLoading" type="submit" variant="primary">
          Añadir
        </VButton>
      </VModalFooter>
    </form>
  </VModal>
</template>
