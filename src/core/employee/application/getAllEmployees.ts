import type { EmployeeRepository } from '@/core/employee/domain/EmployeeRepository.ts'
import { Types } from '@/config/container/Types.ts'
import { injectDependency } from '@/config/container/utils/injectDependency.ts'

const registerDependencies = async () => {
  return {
    [Types.EMPLOYEE_REPOSITORY]:  await injectDependency<EmployeeRepository>(Types.EMPLOYEE_REPOSITORY),
  }
}

export const getAllEmployees = async (dependencies = registerDependencies()) => {
  const { employeeRepository } = await dependencies

  const execute = async () => {
    return await employeeRepository.getAll()
  }

  return {
    execute
  }
}

