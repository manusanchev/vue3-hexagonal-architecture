## Vue 3 Template for Hexagonal Architecture

### Overview
This project is a Vue 3 project template designed to facilitate the creation of highly scalable applications following the principles of hexagonal architecture. Although currently a work in progress (WIP), this template aims to serve as a foundation for future projects.

### Why Use This Template?
The goal of this template is to streamline the development of scalable and maintainable applications by adhering to the principles of hexagonal architecture, promoting clean separation between business logic and external frameworks or tools.

### Contributing
Contributions are welcome! If you'd like to contribute:
1. Fork the repository.
2. Make your changes.
3. Submit a pull request.

Your contributions will be reviewed and, if they align with the project's goals, will be merged.

### Rationale Against Dependency Injection Containers
Dependency injection containers like Inversify can introduce performance overhead by requiring all dependencies to be registered at the application's start, leading to unnecessary loading of unused modules. To avoid this, this project opts for a different approach.

### Dependency Injection Strategy
Instead of using a traditional dependency injection container, this project leverages dynamic imports within repositories and use cases, loading dependencies only when needed. This strategy not only boosts performance by avoiding unnecessary initial loads, but also enhances testability by ensuring that components depend solely on abstractions rather than concrete implementations.

#### Example
Here's an example of how dependencies are dynamically injected:

```js
const registerDependencies = async () => {
  return {
    [Types.EMPLOYEE_REPOSITORY]:  await injectDependency<EmployeeRepository>(Types.EMPLOYEE_REPOSITORY),
  }
}

export const getAllEmployees = async (dependencies = registerDependencies()) => {
  const { employeeRepository } = await dependencies

  const execute = async () => {
    return await employeeRepository.getAll()
  }

  return {
    execute
  }
}
```
In this example, the employeeRepository is only loaded when necessary, optimizing the application's performance and to keep

### Using Composables
This project uses composables to separate the application layer from the UI layer (e.g., Vue, Pinia, vue-router). This design ensures that frontend frameworks remain decoupled from the core infrastructure, making upgrades and updates easier and reducing the risk of dependency-related issues.

### Testing
To enhance testability, dependencies are injected as parameters into the use cases. This allows for easy mocking of dependencies during tests, using tools like ts-mockito.

#### Example Test Setup
Here's how you can mock dependencies in your tests:
```js

getAllEmployees(() => Promise.resolve({ employeeRepository }));
....

const prepareTest = () => {
  const mockEmployeeRepository = mock<EmployeeRepository>();
  when(mockEmployeeRepository.getAll()).thenResolve([{
    id: '123e4567-e89b-12d3-a456-426614174000',
    name: 'John',
    lastName: 'Doe',
  }]);

  return { employeeRepository: instance(mockEmployeeRepository) };
}


```
This setup allows you to effectively test your use cases without relying on actual implementations of the dependencies.

