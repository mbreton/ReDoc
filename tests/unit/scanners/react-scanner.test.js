import sinon from 'sinon';
import _fs from 'fs-extra';
import * as reactDocgen from 'react-docgen';
import { internal as logger } from '../../../src/logger';
import reactScanner from '../../../src/scanners/react-scanner';

describe('ReactScanner', () => {
  test('should parse foo.jsx and quix.js files', () => {
    // given
    const parse = sinon.stub(reactDocgen, 'parse').returns('');
    sinon.stub(logger, 'debug');
    sinon.stub(logger, 'info');
    const readFileSync = sinon.stub(_fs, 'readFileSync');
    readFileSync.withArgs('./foo.jsx').returns('fooContent');
    readFileSync.withArgs('./qix.js').returns('qixContent');
    const scanner = reactScanner;

    // when
    scanner.scan(['./foo.jsx', './qix.js']);

    // then
    expect(readFileSync.calledTwice).toBeTruthy();
    expect(parse.calledTwice).toBeTruthy();
    expect(parse.calledWithExactly('fooContent')).toBeTruthy();
    expect(parse.calledWithExactly('qixContent')).toBeTruthy();
  });
});
