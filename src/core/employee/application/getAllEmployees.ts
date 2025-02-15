import type { EmployeeRepository } from '@/core/employee/domain/EmployeeRepository.ts'
import { Types } from '@/core/shared/domain/container/Types.ts'
import { injectDependency } from '@/core/shared/infrastructure/container/utils/injectDependency.ts'
import type { Logger } from '@/core/shared/domain/Logger.ts'

const registerDependencies = async () => {
  return {
    [Types.EMPLOYEE_REPOSITORY]:  await injectDependency<EmployeeRepository>(Types.EMPLOYEE_REPOSITORY),
    [Types.LOGGER]: await injectDependency<Logger>(Types.LOGGER),
  }
}

export const getAllEmployees = async (dependencies = registerDependencies()) => {
  const { employeeRepository, logger } = await dependencies

  const execute = async () => {
      try {
        const employees = await employeeRepository.getAll()
        logger.info(`Employees executed`)
        return employees
      } catch (error) {
        logger.error(`Error: ${error}`)
        throw error
      }
  }

  return {
    execute
  }
}

