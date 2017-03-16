#!/usr/bin/env node

const program = require('commander');
const packageJson = require('../package.json');
const init = require('./cli/init');
const run = require('./cli/run');

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
  .action(run);

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  run();
}
