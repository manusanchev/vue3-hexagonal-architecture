import type { CreateEmployee, Employee } from '@/core/employee/domain/Employee.ts'

export interface EmployeeRepository {
  getAll(): Promise<Employee[]>
  create(employee: CreateEmployee): Promise<void>
}

