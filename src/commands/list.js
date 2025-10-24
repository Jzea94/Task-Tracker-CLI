


const validateArgs = ({ args }) => {
  console.log('Hola')
}

export default {
  info: 'listar las tareas',
  validate: validateArgs,
  run: async ({ args, flags }) => { }
};
