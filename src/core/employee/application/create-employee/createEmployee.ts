import { Types } from '@/core/shared/domain/container/Types.ts'
import { injectDependency } from '@/core/shared/infrastructure/container/utils/injectDependency.ts'
import type { Logger } from '@/core/shared/domain/Logger.ts'
import type { EmployeeRepository } from '@/core/employee/domain/EmployeeRepository.ts'
import type { CreateEmployee, Employee } from '@/core/employee/domain/Employee.ts'
import type { Uuid } from '@/core/shared/domain/Uuid.ts'

const registerDependencies = async () => {
  return {
    [Types.EMPLOYEE_REPOSITORY]: await injectDependency<EmployeeRepository>(
      Types.EMPLOYEE_REPOSITORY,
    ),
    [Types.LOGGER]: await injectDependency<Logger>(Types.LOGGER),
    [Types.UUID_GENERATOR]: await injectDependency<Uuid>(Types.UUID_GENERATOR),
  }
}

interface CreateEmployeeParams {
  employee: Employee
}

export const createEmployee = async (dependencies = registerDependencies()) => {
  const { employeeRepository, logger, uuidGenerator } = await dependencies
  const execute = async ({ employee }: CreateEmployeeParams) => {
    try {
      const employeeToCreate: CreateEmployee = {id: uuidGenerator.generate(), ...employee}
      return await employeeRepository.create(employeeToCreate)
    } catch (error) {
      logger.error(`Error: ${error}`)
      throw error
    }
  }

  return {
    execute,
  }
}
