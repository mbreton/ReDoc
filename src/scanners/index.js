function scanFilesFactory({ glob, redocConfig, scannerTypes }) {
  return function scanFiles() {
    if (redocConfig.type in scannerTypes) {
      const scanner = scannerTypes[redocConfig.type];
      return glob(redocConfig.inputDir, { ignore: redocConfig.ignore })
        .then(scanner.scan.bind(scanner));
    }
    throw new Error(`There is no scanner of type : ${redocConfig.type}`);
  };
}

const utils = require('../utils');
const Promise = require('bluebird');
const scannerTypes = require('./types');
const glob = Promise.promisify(require('glob'));

const redocConfig = utils.getRedocConfig();

module.exports = scanFilesFactory({ glob, redocConfig, scannerTypes });
module.exports.factory = scanFilesFactory;
