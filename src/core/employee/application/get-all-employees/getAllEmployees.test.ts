import { describe, it, expect } from 'vitest';
import { instance, mock, when } from 'ts-mockito';
import { getAllEmployees } from '@/core/employee/application/get-all-employees/getAllEmployees.ts';
import type { EmployeeRepository } from '@/core/employee/domain/EmployeeRepository.ts';
import type { Logger } from '@/core/shared/domain/Logger.ts';
import type { Employee } from '@/core/employee/domain/Employee.ts'

describe('getAllEmployees', () => {
  it('should return employees', async () => {
    const { dependencies, employeeRepositoryMock } = await prepareTest();

    const expectedEmployees: Employee[] = [{ name: 'John Doe', username: 'johndoe', website: 'johndoe.com', phone: '123456789' }];
    when(employeeRepositoryMock.getAll()).thenResolve(expectedEmployees);

    const { execute } = await getAllEmployees(Promise.resolve(dependencies));


    const result = await execute();
    expect(result).toEqual(expectedEmployees);
  });

  it('should throw error', async () => {
    const { dependencies, employeeRepositoryMock } = await prepareTest();

    const error = new Error('Repository error');
    when(employeeRepositoryMock.getAll()).thenReject(error);

    const { execute } = await getAllEmployees(Promise.resolve(dependencies));

    await expect(execute()).rejects.toThrow(error);
  });
});


const prepareTest = async () => {
  const employeeRepositoryMock = mock<EmployeeRepository>();
  const loggerMock = mock<Logger>();

  const dependencies = {
    employeeRepository: instance(employeeRepositoryMock),
    logger: instance(loggerMock),
  };

  return { dependencies, employeeRepositoryMock, loggerMock };
};
