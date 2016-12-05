const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

const logger = require('../logger').get('cli');
const Configuration = require('../models/configuration');

// Inquirer questions
const questions = [
  {
    type: 'input',
    name: 'inputDir',
    message: 'Project directory: ',
    default: './',
  },
  {
    type: 'input',
    name: 'outputDir',
    message: 'Documentation output: ',
    default: './component-docs',
  },
  {
    type: 'input',
    name: 'patternToIgnore',
    message: 'Pattern to ignore: ',
    default: './node_modules/*',
  },
  {
    type: 'checkbox',
    name: 'componentTypes',
    message: 'Kind of component: ',
    choices: ['react', 'angular2', 'vuejs', 'polymer'],
    default: ['react'],
    validate: (answer) => {
      if (answer.length < 1) {
        return 'You must at least choose one';
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'cssPath',
    message: 'Path to an additional CSS file: ',
    default: '',
  },
];

/**
 * Update `package.json` with the given configuration
 * @params {Configuration} conf the configuration to write
 */
function updatePackageJSON(conf) {
  const packageToUpdatePath = path.join(process.cwd(), 'package.json');
  const packageToUpdate = JSON.parse(fs.readFileSync(packageToUpdatePath));
  packageToUpdate.sgrConfig = conf;
  fs.writeFileSync(packageToUpdatePath, JSON.stringify(packageToUpdate, null, '  '));
}

/**
 * entry point for `sgr init`
 */
function init() {
  return inquirer.prompt(questions).then((answers) => {
    const conf = new Configuration(
      answers.inputDir,
      answers.outputDir,
      answers.patternToIgnore,
      answers.componentTypes,
      answers.cssPath // eslint-disable-line
    );

    updatePackageJSON(conf);

    logger.info(`
      ${chalk.green('✨ Congratulations!')}
      The configuration is located in your ${chalk.bold('package.json')}.
      You can now run ${chalk.bold('sgr run')} to scan your project.
    `);
  });
}


module.exports = init;
