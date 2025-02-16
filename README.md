
# Vue 3 Template for Hexagonal Architecture 🚀

📖 **[Leer esta documentación en español](README.es.md)**  

## 📌 Introduction
This project is a **Vue 3 template** designed to **simplify the development of scalable and maintainable applications** by applying **Hexagonal Architecture** principles. While still a **work in progress (WIP)**, this template serves as a solid foundation for future projects.

## 🔥 Why Choose This Template?
This template **streamlines application development** by ensuring a **clean separation** between business logic and external frameworks, **boosting maintainability and scalability**.

## 🤝 Contributing
We welcome contributions! Here’s how you can help:
1. **Fork** the repository.
2. **Implement your changes**.
3. **Submit a pull request**.

All contributions will be reviewed and merged if they align with the project’s vision.

## 🚫 Why Not Use Dependency Injection Containers?
Traditional **dependency injection containers** (like Inversify) can **slow down performance** by registering all dependencies at startup, even those that **aren’t needed**. To **avoid unnecessary overhead**, this template uses a different approach.

## ⚡ Dynamic Dependency Injection Strategy
Instead of a **traditional dependency injection container**, this project **dynamically imports dependencies** within **repositories and use cases**, ensuring:
- **Optimized performance** by loading dependencies **only when required**.
- **Enhanced testability** through a **decoupled design**.

### 🛠 Example: Dynamic Dependency Injection
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
✅ In this example, `employeeRepository` is **only loaded when needed**, improving performance and modularity.

## 🎯 Using Composables for a Decoupled Architecture
This template **leverages Vue’s composables** to **separate the application logic from the UI framework** (Vue, Pinia, vue-router). This approach:
- Makes framework upgrades **easier**.
- Reduces the risk of **dependency conflicts**.
- Keeps the **core logic independent** of UI concerns.

## 🧪 Testing Strategy
To improve **testability**, dependencies are injected as **parameters** into use cases. This allows for **easy mocking** using tools like `ts-mockito`, enabling **robust unit testing**.

### 📝 Example: Mocking Dependencies in Tests
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
✅ This setup **eliminates reliance on real implementations**, making your tests **more efficient and reliable**.

---

🚀 **Start building scalable Vue 3 applications with Hexagonal Architecture today!**  
💡 Got ideas? **Contribute and help improve the project!**  

