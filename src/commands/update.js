


const validateArgs = ({ args }) => {
  const { id, description } = args;
  
}


// task-cli update id [description]
export default {
  info: 'Actualizar una tarea',
  run: async ({ args }) => {
    const isOk = validateArgs({args});
    console.log('hola desde la funcion run del comando update...')
  }
};
