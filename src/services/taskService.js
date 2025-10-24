import { Task } from '../models/Tasks.js'
import { tasksManager } from '../utils/fileManager.js'


export const addNewTask = async (description) => {
  
  const { readData, writeData } = tasksManager();

  const newTask = new Task({description});    
  const content = await readData();

  content.tasks.push(newTask);
  writeData(JSON.stringify(content, null, 2));  
}