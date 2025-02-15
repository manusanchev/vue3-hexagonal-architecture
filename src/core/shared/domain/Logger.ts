export interface Logger {
  warning(message: string): void
  error(message: string): void
  info(message: string): void
}
