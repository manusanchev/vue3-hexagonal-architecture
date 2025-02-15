import { container } from '@/core/shared/infrastructure/container/container.ts'

const injectDependency = async <T>(name: string) => {
  const module =  await container[name]()
  const dependencyFileName = Object.keys(module)[0]
  return module[dependencyFileName]() as T
}

export { injectDependency }
