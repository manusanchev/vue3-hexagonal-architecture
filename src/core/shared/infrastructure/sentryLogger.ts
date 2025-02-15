import * as Sentry from '@sentry/vue'
import type { Logger } from '@/core/shared/domain/Logger.ts'

export const sentryLogger = (): Logger => {
  const error = (message: string) => {
    Sentry.captureMessage(message, 'error')
  }

  const info = (message: string) => {
    Sentry.captureMessage(message, 'info')
  }

  const warning = (message: string) => {
    Sentry.captureMessage(message, 'warning')
  }

  return {
    warning,
    error,
    info,
  }
}
