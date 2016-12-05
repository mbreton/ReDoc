#!/usr/bin/env node

const program = require('commander');
const packageJson = require('../package.json');
const init = require('./cli/init');

program
  .description('Component showcase generator')
  .version(packageJson.version);

program
  .command('init')
  .description('initialize configuration')
  .action(init);

program
  .command('run')
  .description('generate the documentation')
  .action(() => {
    throw new Error('Not yet implemented')
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.help();
}
