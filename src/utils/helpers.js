import { tasksManager } from "./fileManager.js"


export const setDate = () => {

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit'
  }
  const currentTime = new Date().toLocaleString('en-US', options);

  return currentTime;
}


// 💡 Extra tip de diseño:
// Si en el futuro agregas concurrencia (varias operaciones al mismo tiempo),
// podrías tener una condición de carrera en el ID. Pero por ahora, siendo un
// CLI local sin async paralelo, estás seguro

export const setId = () => {

  let id;
  const { tasks } = tasksManager().readData();

  if ( tasks.length === 0 ) return id = 1;  
  const maxID = Math.max(...tasks.map(obj => obj.id || 0));  
  
  return maxID + 1;
}