#!/usr/bin/env node
import { router } from './router.js'


(async () => {
  const raw = process.argv.slice(2);
  if (raw.length === 0) {
    console.log('No command specified.');
    console.log('Use: task-cli --help to see the available commands.\n');
    return;
  }
  try {    
    router(raw);

  } catch (err) {
    console.error('Error crítico:', err.message);
    process.exit(1);
  }
})();

