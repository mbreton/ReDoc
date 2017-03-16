function scanFilesFactory({ glob, redocConfig, scanners }) {
  return function scanFiles() {
    if (redocConfig.type in scanners) {
      const scanner = scanners[redocConfig.type];
      return glob(redocConfig.inputDir, { ignore: redocConfig.ignore })
        .then(scanner.scan.bind(scanner));
    }
    throw new Error(`There is no scanner of type : ${redocConfig.type}`);
  };
}

const utils = require('../utils');
const reactScanner = require('./react-scanner');
const Promise = require('bluebird');
const glob = Promise.promisify(require('glob'));

const scanners = {
  React: reactScanner,
};
const redocConfig = utils.getRedocConfig();

module.exports = scanFilesFactory({ glob, redocConfig, scanners });
module.exports.scanners = scanners;
module.exports.factory = scanFilesFactory;
