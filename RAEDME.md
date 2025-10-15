# Task Tracker CLI

Estoy desarrollando un Task Tracker CLI para realizar un seguimiento y administrar mis tareas. Quiero desarrolar una interfaz de línea de comandos (CLI) simple para realizar un seguimiento de lo que necesito hacer, lo que he hecho y en lo que estoy trabajando actualmente. 

## Requisitos
La aplicación debe ejecutarse desde la línea de comandos, aceptar las acciones y entradas del usuario como argumentos y almacenar las tareas en un archivo JSON. El usuario debería poder:

- [ ] Agregar, actualizar y eliminar tareas
- [ ] Marcar una tarea como en curso o terminada
- [ ] Enumerar todas las tareas
- [ ] Enumerar todas las tareas que se realizan
- [ ] Enumerar todas las tareas que no se han realizado
- [ ] Enumerar todas las tareas que están en curso

Estas son algunas restricciones para guiar la implementación:

- Usaremos JavaScript para compilar el proyecto.
- Utilice argumentos posicionales en la línea de comandos para aceptar entradas de usuario.
- Utilice un archivo JSON para almacenar las tareas en el directorio actual.
- El archivo JSON debe crearse si no existe.
- Utilice el módulo del sistema de archivos nativo del lenguaje de programación para interactuar con el archivo JSON.
- No use bibliotecas o marcos externos para compilar este proyecto.
- Asegúrese de manejar los errores y los casos extremos con gracia.

## Example:

La lista de comandos y su uso se proporciona a continuación:
```bash
# Adding a new task
task-cli add "Buy groceries"
# Output: Task added successfully (ID: 1)

# Updating and deleting tasks
task-cli update 1 "Buy groceries and cook dinner"
task-cli delete 1

# Marking a task as in progress or done
task-cli mark-in-progress 1
task-cli mark-done 1

# Listing all tasks
task-cli list

# Listing tasks by status
task-cli list done
task-cli list todo
task-cli list in-progress
```


## Propiedades de la tarea

Cada tarea debe tener las siguientes propiedades:

- `id:` Un identificador único para la tarea. 
- `description:` Una breve descripción de la tarea. 
- `status:` El estado de la tarea (, , todoin-progressdone). 
- `createdAt:` La fecha y hora en que se creó la tarea. 
- `updatedAt:` La fecha y hora en que se actualizó por última vez la tarea. 


Asegúrate de agregar estas propiedades al archivo JSON al agregar una nueva tarea y actualizarlas al actualizar una tarea.

---

# Empezar
Estos son algunos pasos que le ayudarán a empezar a trabajar con el proyecto de la CLI de Task Tracker:

## Configurar el entorno de desarrollo
- [ ] Elija un lenguaje de programación con el que se sienta cómodo (por ejemplo, Python, JavaScript, etc.).
- [ ] Asegúrese de tener instalado un editor de código o IDE (por ejemplo, VSCode, PyCharm).

## Inicialización del proyecto
- [ ] Cree un nuevo directorio de proyecto para la CLI de Task Tracker.

- [ ] Inicialice un sistema de control de versiones (por ejemplo, Git) para administrar su proyecto.

## Características de implementación
Comience creando una estructura CLI básica para manejar las entradas del usuario.

Implemente cada característica una por una, asegurándose de probar a fondo antes de pasar a la siguiente, por ejemplo, implemente agregar la funcionalidad de la tarea primero, enumerar a continuación, luego actualizar, marcar como en progreso, etc.

## Pruebas y depuración
Pruebe cada función individualmente para asegurarse de que funcionan como se espera. Examine el archivo JSON para comprobar que las tareas se almacenan correctamente.

Depure cualquier problema que surja durante el desarrollo.

## Finalización del proyecto
Asegúrese de que todas las funciones estén implementadas y probadas.

Limpie su código y agregue comentarios cuando sea necesario.

Escriba un buen archivo léame sobre cómo usar su CLI de Task Tracker.

Al final de este proyecto, habrás desarrollado una herramienta práctica que puede ayudarte a ti o a otros a gestionar las tareas de forma eficiente. Este proyecto sienta una base sólida para proyectos de programación más avanzados y aplicaciones del mundo real.




