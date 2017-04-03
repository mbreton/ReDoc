import fs from 'fs';
import path from 'path';
import { CONFIG_PROP_NAME } from '../models/configuration';

function getRedocConfig() {
  const packageJsonPath = path.resolve(process.cwd(), 'package.json');
  return JSON.parse(fs.readFileSync(packageJsonPath))[CONFIG_PROP_NAME];
}

module.exports = { getRedocConfig };
