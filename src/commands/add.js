import { addNewTask } from '../services/taskService.js'

/**
 * 
 * @param {String[]} args array con los argumentos del comando
 * @returns 
 */
const validateArgs = ( args ) => {

  let description = '';

  for (const arg of args) description = description.concat(` ${arg}`);

  if ( !description || description.trim().length === 0 ) {
    description = false;
    return console.log(`⚠️  Task description is required.`);
  }

  return description;
}

export default {
  contract: 'task-cli add [description]',
  info: 'to add a new Task',
  run: async ( args ) => {

    const description = validateArgs(args);
    if ( !description ) return;

    await addNewTask(description);
  }
};
