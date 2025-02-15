import type { Employee } from '@/core/employee/domain/Employee.ts'

export interface EmployeeRepository {
  getAll(): Promise<Employee[]>
}

