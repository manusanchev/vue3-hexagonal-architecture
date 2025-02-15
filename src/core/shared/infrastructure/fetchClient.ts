import type { Http } from '@/core/shared/domain/Http.ts'

export const fetchClient = (): Http => {
  return {
    get: async (url: string) => {
      return await fetch(url)
        .then((response) => response.json())
        .then((data) => data)
    },
  }
}
