// @flow

import { parse } from 'react-docgen';
import fs from 'fs-extra';
import type { ComponentDescriptor } from '../models/component-descriptor';
import { internal as logger } from '../logger';

class ReactScanner {

  scan = (filePaths: string[]): ComponentDescriptor[] => {
    logger.info('React component scanning is in progress');
    return filePaths
        .map(this.getPathAndContent)
        .reduce(this.addParsedFile, []);
  };

  getPathAndContent = (path: string) => {
    logger.debug(`Found ${path}`);
    return { path, content: fs.readFileSync(path) };
  };

  addParsedFile = (fileParsingResults: ComponentDescriptor[], { path, content }) => {
    try {
      const componentDescriptor:ComponentDescriptor = Object.assign({
        name: path,
        path,
      },
        parse(content));
      logger.debug(`File ${path} parsed successfully`);
      return fileParsingResults.concat(componentDescriptor);
    } catch (e) {
      logger.debug(`Couldn't parse ${path}`);
      logger.debug(e);
      return fileParsingResults;
    }
  };
}

export default new ReactScanner();
