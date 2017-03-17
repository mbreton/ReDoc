class ReactScanner {
  constructor({ logger, reactDocs, fs }) {
    this.reactDocs = reactDocs;
    this.logger = logger;
    this.fs = fs;
  }

  scan(filePaths) {
    this.logger.info('React component scanning is in progress');
    return filePaths
        .map(this.getPathAndContent.bind(this))
        .reduce(this.addParsedFile.bind(this), []);
  }
  getPathAndContent(path) {
    this.logger.debug(`Found ${path}`);
    return { path, content: this.fs.readFileSync(path) };
  }
  addParsedFile(fileParsingResults, { path, content }) {
    try {
      const fileParsingResult = this.reactDocs.parse(content);
      this.logger.debug(`File ${path} parsed successfully`);
      return fileParsingResults.concat(fileParsingResult);
    } catch (e) {
      this.logger.debug(`Couldn't parse ${path}`);
      this.logger.debug(e);
      return fileParsingResults;
    }
  }
}

const reactDocs = require('react-docgen');
const logger = require('../logger').internal;
const fs = require('fs-extra');

function ReactScannerFactory() {
  return new ReactScanner({ logger, reactDocs, fs });
}

module.exports = ReactScannerFactory();
module.exports.Scanner = ReactScanner;
