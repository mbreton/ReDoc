const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

const logger = require('../logger').cli;
const scannerTypes = Object.keys(require('../scanners/types'));
const Configuration = require('../models/configuration').Configuration;
const CONFIG_PROP_NAME = require('../models/configuration').CONFIG_PROP_NAME;

// Inquirer questions
const questions = [
  {
    type: 'input',
    name: 'inputDir',
    message: 'Project directory (glob): ',
    default: './**/{*.js,*.jsx}',
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
    message: 'Pattern to ignore (glob): ',
    default: './node_modules/**/*',
  },
  {
    type: 'list',
    name: 'componentType',
    message: 'Kind of component: ',
    choices: scannerTypes,
    default: [scannerTypes[0]],
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
  packageToUpdate[CONFIG_PROP_NAME] = conf;
  fs.writeFileSync(packageToUpdatePath, JSON.stringify(packageToUpdate, null, '  '));
}

/**
 * entry point for `redoc init`
 */
function init() {
  return inquirer.prompt(questions).then((answers) => {
    const conf = new Configuration(
      answers.inputDir,
      answers.outputDir,
      answers.patternToIgnore,
      answers.componentType,
      answers.cssPath // eslint-disable-line
    );

    updatePackageJSON(conf);

    logger.info(`
      ${chalk.green('✨ Congratulations!')}
      The configuration is located in your ${chalk.bold('package.json')}.
      You can now run ${chalk.bold('redoc run')} to scan your project.
    `);
  });
}


module.exports = init;
