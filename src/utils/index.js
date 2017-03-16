const fs = require('fs');
const path = require('path');
const CONFIG_PROP_NAME = require('../models/configuration').CONFIG_PROP_NAME;

function getRedocConfig() {
  const packageJsonPath = path.resolve(process.cwd(), 'package.json');
  return JSON.parse(fs.readFileSync(packageJsonPath))[CONFIG_PROP_NAME];
}

module.exports = { getRedocConfig };
