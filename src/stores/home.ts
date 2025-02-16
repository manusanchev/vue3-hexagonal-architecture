import { defineStore } from 'pinia'
import type { Employee } from '@/core/employee/domain/Employee.ts'

export const useHomeStore = defineStore('home', {
  state: () => ({
    employees: [] as Employee[],
  }),
  getters: {
    countEmployees: (state) => state.employees.length,
  },
  actions: {
    setEmployees(employees: Employee[]) {
      this.employees = employees
    },
    setEmployee(employee: Employee) {
      this.employees.unshift(employee)
    },
  },
})
