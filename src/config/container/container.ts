import { Types } from '@/config/container/Types.ts'

const repositoriesContainer = {
  [Types.EMPLOYEE_REPOSITORY]: () => import('@/core/employee/infrastructure/apiEmployeeRepository.ts'),
}

const infrastructureContainer = {
  [Types.HTTP_CLIENT]: () => import('@/core/shared/infrastructure/fetchClient.ts'),
}

const container: Record<string, () => Promise<any>> = {
  ...repositoriesContainer,
  ...infrastructureContainer,
}

export { container }
