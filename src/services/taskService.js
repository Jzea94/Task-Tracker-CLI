import { Task } from '../models/Tasks.js'
import { tasksManager } from '../utils/fileManager.js'

const { readData, writeData } = tasksManager();

export const addNewTask = (description) => {  
  const newTask = new Task({ description });
  const obj  = readData(); // tasks[{}, {}, {}]
  
  obj.tasks.push(newTask);
  console.log('-->',obj);
  writeData(JSON.stringify(obj, null, 2));  
}

export const getTaskByID = (id) => {
  const { tasks } = readData();
  const taskByID = tasks.filter((t) => t.id === id);
  return taskByID;
}