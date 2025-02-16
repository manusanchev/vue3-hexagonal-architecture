import { Types } from '@/core/shared/domain/container/Types.ts'
import { EnvTypes } from '@/core/shared/domain/container/EnvTypes.ts'

const repositoriesContainer = {
  [Types.EMPLOYEE_REPOSITORY]: () => import('@/core/employee/infrastructure/apiEmployeeRepository.ts'),
}

const infrastructureContainer = {
  [Types.HTTP_CLIENT]: () => import('@/core/shared/infrastructure/fetchClient.ts'),
  [Types.LOGGER]: () => import('@/core/shared/infrastructure/sentryLogger.ts'),
  [Types.UUID_GENERATOR]: () => import('@/core/shared/infrastructure/uuidCryptoGenerator.ts'),
}

const environmentContainer: Record<string, () => Promise<any>> = {
  [EnvTypes.BASE_URL]: () => import.meta.env.VITE_BASE_URL,
}

const container: Record<string, () => Promise<any>> = {
  ...repositoriesContainer,
  ...infrastructureContainer
}

export { container, environmentContainer }
