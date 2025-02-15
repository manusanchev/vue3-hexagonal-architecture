import type { Http } from '@/core/shared/domain/Http.ts'

export const fetchClient = <T>(): Http => {
  const get = async (url: string) => {
      return await fetch(url)
        .then((response) => response.json())
        .then((data) => data) as Promise<T>
    }

  return {
    get
  }
}
