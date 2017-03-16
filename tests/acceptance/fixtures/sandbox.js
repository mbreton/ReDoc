import { execSync } from 'child_process';
import path from 'path';
import rimraf from 'rimraf';
import fs from 'fs-extra';
import uuid from 'uuid';

import { test as logger } from '../../../src/logger';


export default class Sandbox {
  constructor() {
    this.projectPath = path.join(__dirname, '_sandbox-projects', `${uuid()}`);
    this.cwdOption = { cwd: this.projectPath };
    logger.log(`Creating project ${this.projectPath}`);
  }

  withTemplate(projectTemplateName = 'simple-react') {
    logger.log(`Copying template ${projectTemplateName}`);
    const templateProjectTemplatePath = path.join(__dirname, '_project-templates', projectTemplateName);
    try {
      fs.copySync(templateProjectTemplatePath, this.projectPath);
      this.execSyncIn('npm i');
      this.execSyncIn(`npm link ${process.cwd()}`);
    } catch (e) {
      logger.error(e);
    }
    return this;
  }

  withConfig(configName = 'default') {
    logger.log(`Using config ${configName}`);
    const configPath = path.join(__dirname, '_config-templates', `${configName}.json`);
    const projectPackageJsonPath = path.join(this.projectPath, 'package.json');
    const projectPackageJson = JSON.parse(fs.readFileSync(projectPackageJsonPath));
    const redocConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    projectPackageJson.redocConfig = redocConfig;
    fs.writeFileSync(projectPackageJsonPath, JSON.stringify(projectPackageJson, null, '  '));
    return this;
  }

  execSyncIn(command) {
    return execSync(command, this.cwdOption).toString();
  }

  destroy() {
    rimraf.sync(this.projectPath);
  }
}
