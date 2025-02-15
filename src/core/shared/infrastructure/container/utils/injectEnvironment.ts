import {
  environmentContainer
} from '@/core/shared/infrastructure/container/container.ts'

export const injectEnvironment = async <T>(name: string) => {
  return await environmentContainer[name]() as Promise<T>
}
