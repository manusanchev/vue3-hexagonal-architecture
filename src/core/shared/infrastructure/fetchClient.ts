import type { Http } from '@/core/shared/domain/Http.ts'
import { EnvTypes } from '@/core/shared/domain/container/EnvTypes.ts'
import {
  injectEnvironment
} from '@/core/shared/infrastructure/container/utils/injectEnvironment.ts'

const registerDependencies = async () => {
  return {
    [EnvTypes.BASE_URL]: await injectEnvironment<string>(EnvTypes.BASE_URL),
  }
}


export const fetchClient = async (dependencies = registerDependencies()): Promise<Http> => {
  const { baseUrl } = await dependencies
  const get = async <T>(url: string) => {
      return await fetch(`${baseUrl}${url}`)
        .then((response) => response.json())
        .then((data) => data) as Promise<T>
    }

  return {
    get
  }
}
