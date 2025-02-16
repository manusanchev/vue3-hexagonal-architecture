# Plantilla Vue 3 para Arquitectura Hexagonal 🚀

📖 **[Read this documentation in English](README.md)**  

## 📌 Introducción
Este proyecto es una **plantilla para Vue 3** diseñada para **simplificar el desarrollo de aplicaciones escalables y mantenibles**, aplicando los principios de **Arquitectura Hexagonal**. Aunque aún está en **desarrollo (WIP)**, esta plantilla sirve como una base sólida para futuros proyectos.

## 🔥 ¿Por qué elegir esta plantilla?
Esta plantilla **facilita el desarrollo de aplicaciones** asegurando una **separación clara** entre la lógica de negocio y los frameworks externos, **mejorando la mantenibilidad y escalabilidad**.

## 🤝 Contribuir
¡Las contribuciones son bienvenidas! Así puedes ayudar:
1. **Haz un fork** del repositorio.
2. **Realiza tus cambios**.
3. **Envía un pull request**.

Todas las contribuciones serán revisadas y aceptadas si se alinean con la visión del proyecto.

## 🚫 ¿Por qué no usar contenedores de inyección de dependencias?
Los **contenedores de inyección de dependencias** tradicionales (como Inversify) pueden **reducir el rendimiento**, ya que registran todas las dependencias en el inicio de la aplicación, incluso aquellas que **no son necesarias**. Para **evitar esta sobrecarga**, esta plantilla usa un enfoque diferente.

## ⚡ Estrategia de Inyección de Dependencias Dinámica
En lugar de utilizar un **contenedor tradicional de inyección de dependencias**, este proyecto **importa dinámicamente las dependencias** dentro de **repositorios y casos de uso**, garantizando:
- **Mejor rendimiento**, cargando dependencias **solo cuando se necesitan**.
- **Mayor facilidad de prueba** mediante un **diseño desacoplado**.

### 🛠 Ejemplo: Inyección de Dependencias Dinámica
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
✅ En este ejemplo, `employeeRepository` **solo se carga cuando es necesario**, mejorando el rendimiento y la modularidad.

## 🎯 Uso de Composables para una Arquitectura Desacoplada
Esta plantilla **aprovecha los composables de Vue** para **separar la lógica de aplicación del framework de UI** (Vue, Pinia, vue-router). Este enfoque:
- Facilita **actualizaciones y mejoras** del framework.
- Reduce el riesgo de **conflictos de dependencias**.
- Mantiene la **lógica central independiente** de las capas de presentación.

## 🧪 Estrategia de Pruebas
Para mejorar la **capacidad de prueba**, las dependencias se inyectan como **parámetros** en los casos de uso. Esto permite **fácil simulación (mocking)** con herramientas como `ts-mockito`, permitiendo **pruebas unitarias sólidas**.

### 📝 Ejemplo: Simulación de Dependencias en Pruebas
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
✅ Esta configuración **elimina la dependencia de implementaciones reales**, haciendo las pruebas **más eficientes y confiables**.

---

🚀 **¡Comienza a construir aplicaciones escalables con Vue 3 y Arquitectura Hexagonal hoy mismo!**  
💡 ¿Tienes ideas? **¡Contribuye y ayuda a mejorar el proyecto!**  
