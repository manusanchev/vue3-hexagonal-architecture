import type { Http } from '@/core/shared/domain/Http.ts'

export const fetchClient = (): Http => {
  const get = async (url: string) => {
      return await fetch(url)
        .then((response) => response.json())
        .then((data) => data)
    }

  return {
    get
  }
}
