import { describe, it, expect } from 'vitest'
import { deepEqual, instance, mock, when } from 'ts-mockito'
import { createEmployee } from '@/core/employee/application/create-employee/createEmployee.ts'
import type { EmployeeRepository } from '@/core/employee/domain/EmployeeRepository.ts'
import type { Logger } from '@/core/shared/domain/Logger.ts'
import type { CreateEmployee, Employee } from '@/core/employee/domain/Employee.ts'
import type { Uuid } from '@/core/shared/domain/Uuid.ts'

describe('createEmployee', () => {
  it('should save employee', async () => {
    const { dependencies, employeeRepositoryMock, employeeToCreateMockObject, employee } =
      await prepareTest()

    when(employeeRepositoryMock.create(deepEqual(employeeToCreateMockObject))).thenResolve()
    const { execute } = await createEmployee(Promise.resolve(dependencies))
    const result = await execute({ employee })

    expect(result).toBeUndefined()
  })

  it('should throw error', async () => {
    const { dependencies, employeeRepositoryMock, employee, employeeToCreateMockObject } = await prepareTest();

    const error = new Error('Repository error');
    when(employeeRepositoryMock.create(deepEqual(employeeToCreateMockObject))).thenReject(error);

    const { execute } = await createEmployee(Promise.resolve(dependencies));

    await expect(execute({ employee })).rejects.toThrow(error);
  })
})

const prepareTest = async () => {
  const employeeRepositoryMock = mock<EmployeeRepository>()
  const loggerMock = mock<Logger>()
  const uuidGeneratorMock = mock<Uuid>()

  const dependencies = {
    employeeRepository: instance(employeeRepositoryMock),
    logger: instance(loggerMock),
    uuidGenerator: instance(uuidGeneratorMock),
  }

  const employeeToCreate: CreateEmployee = {
    id: '2324fba1-5220-4fef-9f2d-254246dc13ec',
    name: 'John Doe',
    username: 'johndoe',
    website: 'johndoe.com',
    phone: '123456789',
  }

  const employee: Employee = {
    name: 'John Doe',
    username: 'johndoe',
    website: 'johndoe.com',
    phone: '123456789',
  }

  when(uuidGeneratorMock.generate()).thenReturn('2324fba1-5220-4fef-9f2d-254246dc13ec')

  return {
    dependencies,
    employeeRepositoryMock,
    loggerMock,
    employeeToCreateMockObject: employeeToCreate,
    employee,
  }
}
