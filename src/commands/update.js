


const validateArgs = ({ args }) => {
  console.log('Hola')
}

export default {
  info: 'Actualizar una tarea',
  validate: validateArgs,
  run: async ({ args, flags }) => {
    console.log('hola desde la funcion run del comando update...')
  }
};
