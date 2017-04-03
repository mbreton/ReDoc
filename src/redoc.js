#!/usr/bin/env node
// @flow
import program from 'commander';
import packageJson from '../package.json';
import init from './cli/init';
import run from './cli/run';

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
