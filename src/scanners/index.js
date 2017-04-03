// @flow
import Promise from 'bluebird';
import glob from 'glob';
import { getRedocConfig } from '../utils';
import * as scannerTypes from './types';

const globPromise = Promise.promisify(glob);

export default function scanFiles() {
  if (getRedocConfig().type in scannerTypes) {
    const scanner = scannerTypes[getRedocConfig().type];
    return globPromise(getRedocConfig().inputDir, { ignore: getRedocConfig().ignore })
      .then(scanner.scan);
  }
  throw new Error(`There is no scanner of type : ${getRedocConfig().type}`);
}

