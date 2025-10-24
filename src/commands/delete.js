
const validateArgs = ({ args }) => {
  console.log('Hola')
}

export default {
  info: 'Elimina una tarea',
  validate: validateArgs,
  run: async ({ args, flags }) => { }
};
