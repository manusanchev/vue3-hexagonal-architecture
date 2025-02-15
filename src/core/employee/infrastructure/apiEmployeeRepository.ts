import type { EmployeeRepository } from '@/core/employee/domain/EmployeeRepository.ts'
import type { Http } from '@/core/shared/domain/Http.ts'
import { Types } from '@/core/shared/domain/container/Types.ts'
import { injectDependency } from '@/core/shared/infrastructure/container/utils/injectDependency.ts'

const registerDependencies = async () => {
  return {
    [Types.HTTP_CLIENT]: await injectDependency<Http>(Types.HTTP_CLIENT),
  }
}

export async function apiEmployeeRepository(dependencies= registerDependencies()): Promise<EmployeeRepository> {
  const { httpClient } = await dependencies

  const getAll = async () => {
    return await httpClient.get('https://jsonplaceholder.typicode.com/users')
  }

  return {
    getAll
  }
}


