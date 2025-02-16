import { useLoader } from '@/components/loader/useLoader.ts'
import { createEmployee } from '@/core/employee/application/create-employee/createEmployee.ts'
import { useHomeStore } from '@/stores/home.ts'
import type { Employee } from '@/core/employee/domain/Employee.ts'
import { useToast } from '@/components/toast/useToast.ts'

export const useSaveEmployee = () => {
  const { isLoading, startLoading, stopLoading } = useLoader()
  const homeStore = useHomeStore()
  const { toast } = useToast()

  const saveEmployee = async (employee: Employee) => {
    let hasErrors = false;
    startLoading()
    try {
      const createEmployeeUseCase = await createEmployee()
      await createEmployeeUseCase.execute({ employee })
      homeStore.setEmployee(employee)
      toast({
        title: 'Empleado guardado exitosamente'
      })
    }catch (error) {
      hasErrors = true
      // Use toast or mutate errors ref to show errors
      toast({
        title: 'Error al guardar empleado'
      })
    } finally {
      stopLoading()
    }
    return { hasErrors }
  }

  return {
    saveEmployee,
    isLoading,
  }
}
