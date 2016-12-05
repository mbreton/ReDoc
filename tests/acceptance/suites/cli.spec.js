import test from 'ava';
import * as sandbox from '../_utils/sandbox';

test.before.cb((t) => {
  sandbox.setup(t.end);
});

test.after.always(() => {
  sandbox.destroy();
});

test('should display help by default', (t) => {
  t.regex(sandbox.execSyncIn('sgr'), /Usage: sgr \[options] \[command]/im);
});

test('should display help when call cli with --help', (t) => {
  t.regex(sandbox.execSyncIn('sgr --help'), /Usage: sgr \[options] \[command]/im);
});

test('should return a correct version number', (t) => {
  t.regex(sandbox.execSyncIn('sgr --version'), /\d\.\d\.\d/);
});
