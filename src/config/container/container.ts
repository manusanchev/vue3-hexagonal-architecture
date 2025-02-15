import { Types } from '@/config/container/Types.ts'

const repositoriesContainer = {
  [Types.EMPLOYEE_REPOSITORY]: () => import('@/core/employee/infrastructure/apiEmployeeRepository.ts'),
}

const applicationContainer = {
  [Types.GET_ALL_EMPLOYEES]: () => import('@/core/employee/application/getAllEmployees.ts'),
}

const infrastructureContainer = {
  [Types.HTTP_CLIENT]: () => import('@/core/shared/infrastructure/fetchClient.ts'),
}

const container: Record<string, () => Promise<any>> = {
  ...repositoriesContainer,
  ...applicationContainer,
  ...infrastructureContainer,
}

export { container }
