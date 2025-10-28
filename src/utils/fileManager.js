// import { readFile, writeFile } from 'fs/promises'
import { readFileSync, writeFileSync } from 'fs';
import { resolve, join  } from 'path';

const dirPath = resolve('data');
const filePath = join(dirPath,'tasks.json');


export const tasksManager = () => {

  const readData = () => {
    try {
      const content = readFileSync(filePath, 'utf-8');
      const data = JSON.parse(content, null, 2);      

      if (typeof data !== 'object' || data === null ) {
        throw new Error('Invalid JSON structure');
      }
      return data;

    } catch (err) {
      if (err.code === 'ENOENT') {
        // Si el archivo no existe, lo crea vacío
        console.warn(`⚠️  File not found: ${filePath}.\nCreating new tasks.json...`);
        writeFileSync(filePath, JSON.stringify({ tasks: [] }, null, 2));
        return { tasks: [] };
      }

      // Si el JSON está dañado, lanza un error controlado
      throw new Error(`❌ Failed to read or parse ${filePath}.\n${err.message}`);
    }
  };

  /**
   * 
   * @param {String} data 
   */
  const writeData = ( data ) => {
    writeFileSync(filePath, data);
    console.log('✅ Task added successfully.');
  };

  return {readData, writeData};
}

