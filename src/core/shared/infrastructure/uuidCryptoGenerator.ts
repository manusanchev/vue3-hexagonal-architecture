import type { Uuid } from '@/core/shared/domain/Uuid.ts'

export const uuidCryptoGenerator = (): Uuid => {
  const generate = () => {
    return crypto.randomUUID()
  }
  return {
    generate,
  }
}
