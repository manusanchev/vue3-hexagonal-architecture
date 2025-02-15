import { container } from '@/core/shared/infrastructure/container/container.ts'
import type { Types } from '@/core/shared/domain/container/Types.ts'

export const injectDependency = async <T>(name: Types) => {
  const module =  await container[name]()
  const dependencyFileName = Object.keys(module)[0]
  return module[dependencyFileName]() as T
}
