// @flow

import { parse } from 'react-docgen';
import fs from 'fs-extra';
import { internal as logger } from '../logger';

type ScanResult = {
    path: string,
    content: any,
}

class ReactScanner {

  scan = (filePaths: string[]) => {
    logger.info('React component scanning is in progress');
    return filePaths
        .map(this.getPathAndContent)
        .reduce(this.addParsedFile, []);
  };

  getPathAndContent = (path: string) => {
    logger.debug(`Found ${path}`);
    return { path, content: fs.readFileSync(path) };
  };

  addParsedFile = (fileParsingResults: ScanResult[], { path, content }: ScanResult) => {
    try {
      const fileParsingResult = parse(content);
      logger.debug(`File ${path} parsed successfully`);
      return fileParsingResults.concat(fileParsingResult);
    } catch (e) {
      logger.debug(`Couldn't parse ${path}`);
      logger.debug(e);
      return fileParsingResults;
    }
  };
}

export default new ReactScanner();
