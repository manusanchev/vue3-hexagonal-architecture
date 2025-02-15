
import type { Employee } from '@/core/employee/domain/Employee.ts'
import { getAllEmployees } from '@/core/employee/application/getAllEmployees.ts'

export const useFetchEmployees = () => {
  const loadEmployees = async (): Promise<Employee[]> => {
    const getAllEmployeesCommand = await getAllEmployees()
    return await getAllEmployeesCommand.execute()
  }

  return {
    loadEmployees,
  }
}
