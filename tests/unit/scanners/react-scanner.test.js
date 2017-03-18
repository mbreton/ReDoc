const sinon = require('sinon');
const ReactScanner = require('../../../src/scanners/react-scanner').Scanner;

describe('ReactScanner', () => {
  test('should parse foo.jsx and quix.js files', () => {
    // given
    const parse = sinon.stub().returns('');
    const readFileSync = sinon.stub();
    readFileSync.withArgs('./foo.jsx').returns('fooContent');
    readFileSync.withArgs('./qix.js').returns('qixContent');
    const scanner = new ReactScanner({
      reactDocs: { parse },
      fs: { readFileSync },
      logger: { debug() { }, info() { } },
    });

    // when
    scanner.scan(['./foo.jsx', './qix.js']);

    // then
    expect(readFileSync.calledTwice).toBeTruthy();
    expect(parse.calledTwice).toBeTruthy();
    expect(parse.calledWithExactly('fooContent')).toBeTruthy();
    expect(parse.calledWithExactly('qixContent')).toBeTruthy();
  });
});
