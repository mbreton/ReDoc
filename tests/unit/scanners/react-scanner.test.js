import test from 'ava';
import sinon from 'sinon';

import { Scanner as ReactScanner } from '../../../src/scanners/react-scanner';

test.cb('should parse foo.jsx and quix.js files', (t) => {
  // given
  const parse = sinon.stub().returns('');
  const readFileSync = sinon.stub();
  readFileSync.withArgs('./foo.jsx').returns('fooContent');
  readFileSync.withArgs('./qix.js').returns('qixContent');
  const scanner = new ReactScanner({
    reactDocs: { parse },
    fs: { readFileSync },
    logger: { debug() {}, info() {} },
  });

  // when
  scanner.scan(['./foo.jsx', './qix.js']);

  // then
  t.is(readFileSync.calledTwice, true);
  t.is(parse.calledTwice, true);
  t.is(parse.calledWithExactly('fooContent'), true);
  t.is(parse.calledWithExactly('qixContent'), true);
  t.end();
});

