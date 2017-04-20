// @flow
import Promise from 'bluebird';
import glob from 'glob';
import { getRedocConfig } from '../utils';
import type { ComponentDescriptor } from '../models/component-descriptor';
import reactScanner from './react-scanner';

const globPromise = Promise.promisify(glob);

export const scannerTypes = { React: reactScanner };

export function scanFiles(): Promise<ComponentDescriptor[]> {
  if (getRedocConfig().type in scannerTypes) {
    const scanner = scannerTypes[getRedocConfig().type];
    return globPromise(getRedocConfig().inputDir, { ignore: getRedocConfig().ignore })
      .then(scanner.scan);
  }
  throw new Error(`There is no scanner of type : ${getRedocConfig().type}`);
}
