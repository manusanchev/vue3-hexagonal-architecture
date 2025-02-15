import { Types } from '@/core/shared/domain/container/Types.ts'

const repositoriesContainer = {
  [Types.EMPLOYEE_REPOSITORY]: () => import('@/core/employee/infrastructure/apiEmployeeRepository.ts'),
}

const infrastructureContainer = {
  [Types.HTTP_CLIENT]: () => import('@/core/shared/infrastructure/fetchClient.ts'),
  [Types.LOGGER]: () => import('@/core/shared/infrastructure/sentryLogger.ts'),
}

const container: Record<string, () => Promise<any>> = {
  ...repositoriesContainer,
  ...infrastructureContainer,
}

export { container }
