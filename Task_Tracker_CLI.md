
# ✅ CHECKLIST DE DESARROLLO – task-cli

---

## 🧩 ETAPA 1 — CONFIGURACIÓN BASE

**Objetivo:** Habilitar el entorno CLI y la estructura del proyecto.

- [X] Crear la estructura de carpetas:✅
  ```
  task-cli/
  ├─ src/
  │  ├─ index.js
  │  ├─ command.js
  │  ├─ utils/
  │  │   └─ fileManager.js
  │  └─ data/
  │      └─ tasks.json
  └─ package.json
  ```
- [X] Añadir cabecera ejecutable al inicio de `src/index.js`.✅
- [X] Configurar `package.json` con "type": "module" y "bin": { "task-cli": "./src/index.js" }.✅
- [X] Ejecutar `npm link` para registrar el comando global `task-cli`.✅

---

## ⚙️ ETAPA 2 — MANEJO DE ARCHIVOS (`fileManager.js`)

**Objetivo:** Crear funciones sincrónicas para persistir tareas.

- [ ] Implementar lectura/escritura sincrónica con `fs`.
- [ ] Si `tasks.json` no existe, crear `{ "tasks": [] }` automáticamente.
- [ ] Usar rutas relativas fijas: `./data/tasks.json`.

---

## 🧱 ETAPA 3 — MODELO DE DATOS Y ENUM

**Objetivo:** Definir una estructura consistente y segura para las tareas.

- [ ] Crear enum de estados (`todo`, `in-progress`, `done`).
- [ ] Estructura de tarea con `id`, `description`, `status`, `createdAt`, `updatedAt`.
- [ ] Todas las nuevas tareas comienzan con `status: "todo"`.
- [ ] Formato de fecha local “DD/MM/YYYY HH:mm”.
- [ ] No mostrar el `id` real del JSON.

---

## 🧠 ETAPA 4 — INTERPRETADOR DE COMANDOS (`command.js`)

**Objetivo:** Interpretar los argumentos CLI y despachar acciones.

- [ ] Capturar argumentos con `process.argv`.
- [ ] Validar argumentos entre comillas.
- [ ] Implementar `handleCommand(args)` para:
  - `add`
  - `update`
  - `delete`
  - `mark-in-progress`
  - `mark-done`
  - `list`
  - `--help`

---

## 🛠️ ETAPA 5 — COMANDOS PRINCIPALES

### 🟢 `add`
- [ ] Validar descripción.
- [ ] Asignar ID incremental que no se reutiliza.
- [ ] Guardar timestamps.
- [ ] Estado inicial `todo`.

### 🟡 `update`
- [ ] Validar ID existente.
- [ ] Si descripción vacía o igual, ignorar.
- [ ] Actualizar `description` y `updatedAt`.

### 🔴 `delete`
- [ ] Requerir `--force` para eliminar.
- [ ] Validar ID.
- [ ] Confirmar eliminación exitosa.

### 🔵 `mark-in-progress` / `mark-done`
- [ ] Validar ID existente.
- [ ] Evitar marcar `done` nuevamente.
- [ ] Actualizar `status` y `updatedAt`.

### ⚪ `list`
- [ ] Mostrar tareas por bloques (todo, in-progress, done).
- [ ] DONE siempre al final.
- [ ] Mostrar índice visible.
- [ ] Formato limpio en texto plano.

### 🧾 `--help`
- [ ] Mostrar ayuda con comandos y descripciones.

---

## 💬 ETAPA 6 — MANEJO DE ERRORES Y RESPUESTAS

- [ ] Retornar errores como objetos `{ error: "mensaje" }`.
- [ ] Mensajes limpios, sin colores.
- [ ] Comandos case-sensitive.

---

## 📚 ETAPA 7 — DOCUMENTACIÓN (`README.md`)

- [ ] Descripción general.
- [ ] Ejemplos de uso.
- [ ] Pasos de instalación y ejecución.
- [ ] Estructura del archivo `tasks.json`.

---

## 🧩 ETAPA 8 — TESTS Y VALIDACIONES (opcional)

- [ ] Verificar tareas con archivo inexistente.
- [ ] Validar descripciones vacías.
- [ ] Comprobar persistencia tras CRUD.
- [ ] Confirmar que IDs no se reutilicen.
- [ ] Verificar formato visual de `list`.
