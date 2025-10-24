# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview
Task Tracker CLI is a command-line task management application built with Node.js. Tasks are stored in a JSON file (`data/taks.json`) and the project uses native Node.js modules without external dependencies.

## Commands

### Running the CLI
```bash
# Run the CLI with arguments
npm start <command> [args]

# Run in development mode with hot reload
npm run dev <command> [args]

# Run directly (requires npm link or proper setup)
task-cli <command> [args]
```

### Expected CLI Commands (from requirements)
```bash
task-cli add "Task description"
task-cli update <id> "New description"
task-cli delete <id>
task-cli mark-in-progress <id>
task-cli mark-done <id>
task-cli list
task-cli list done
task-cli list todo
task-cli list in-progress
```

### Installation
```bash
# Install dependencies (none currently)
npm install

# Link for global usage
npm link
```

## Architecture

### Module Structure
The project follows a modular architecture with ES modules (`"type": "module"` in package.json):

- **Entry Point**: `src/index.js` - Parses `process.argv` and invokes the router
- **Router**: `src/router.js` - Maps commands to their handlers (currently incomplete)
- **Commands**: `src/commands/` - Each command exports an object with `{ info, validate, run }`
  - `add.js` - Add new tasks
  - `update.js` - Update existing tasks
  - `delete.js` - Remove tasks
  - `list.js` - List tasks with optional status filter
  - `mark.js` - Change task status (in-progress/done)
  - `index.js` - Exports all commands
- **Models**: `src/models/Tasks.js` - Task class defining the data structure
- **Services**: `src/services/taskService.js` - Business logic for CRUD operations (stub)
- **Utils**:
  - `fileManager.js` - JSON file operations (read/write to `data/taks.json`)
  - `helpers.js` - General utilities
  - `statusManager.js` - Task status handling

### Data Flow
1. User input → `index.js` → `router.js`
2. Router validates and routes to appropriate command handler
3. Command uses `taskService` for business logic
4. `taskService` uses `fileManager` for persistence
5. Response returned to user via console

### Task Data Structure
Each task has:
- `id` - Unique identifier (incremental)
- `description` - Task description string
- `status` - One of: "todo", "in-progress", "done"
- `createdAt` - ISO timestamp when created
- `updatedAt` - ISO timestamp of last update

### File Storage
- Storage file: `data/taks.json` (note: typo in filename, should be "tasks")
- Structure: `{ "tasks": [ {...}, {...} ] }`
- Created automatically if missing via `initStorage()`

## Development Notes

### Current State
The project is in early development. Most functionality is stubbed:
- Router currently only prints command info, doesn't execute commands
- Commands have placeholder `validate` and `run` functions
- `taskService.js` is empty (needs CRUD implementation)
- `fileManager.js` has `getTasks()` and `saveTasks()` throwing "No implementado"

### Implementation Strategy (from README)
1. Implement features one at a time
2. Test each feature before moving to next
3. Suggested order: add → list → update → mark status → delete

### Key Constraints
- Pure Node.js - no external libraries/frameworks
- Use native `fs` module for file operations
- Positional CLI arguments (not flag-based)
- JSON persistence in current directory structure
- Spanish language comments and messages in codebase
