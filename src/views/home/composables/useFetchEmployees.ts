import { getAllEmployees } from '@/core/employee/application/get-all-employees/getAllEmployees.ts'
import { useHomeStore } from '@/stores/home.ts'
import { useToast } from '@/components/toast/useToast.ts'

export const useFetchEmployees = () => {

  const homeStore = useHomeStore()
  const { toast } = useToast()

  const loadEmployees = async () => {
    try {
      homeStore.setLoading(true)
      const getAllEmployeesCommand = await getAllEmployees()
      const employees = await getAllEmployeesCommand.execute()
      homeStore.setEmployees(employees)
    }catch(error) {
      toast({
          title: 'Error al cargar empleados'
      })
    } finally {
      homeStore.setLoading(false)
    }

  }

  return {
    loadEmployees,
  }
}
