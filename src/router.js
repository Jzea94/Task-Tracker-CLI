import * as commands from "./commands/index.js";

export const router = async (rawArgs) => {
  try {  
    const [command, ...args] = rawArgs;
    const cmd = Object.keys(commands); // return String[keys]
    const isInclude = cmd.includes(command);

    if ( !isInclude || command === '--help') {
      console.log('\x1b[34m%s\x1b[0m', 'Usage:');

      const helpLines = cmd.map((k) => {
        const cmd = commands[k];
        return { command: cmd.contract, description: cmd.info };
      });
      
      return console.table( helpLines );
    }

    const cmdFunction = commands[command].run;
    cmdFunction( args );    

  } catch (error) {
    throw error; 
  }
}
