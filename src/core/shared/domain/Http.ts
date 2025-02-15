export interface Http {
  get<T>(url: string): Promise<T>
}
