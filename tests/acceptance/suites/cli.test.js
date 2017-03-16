import test from 'ava';
import Sandbox from '../fixtures/sandbox';

let sandbox;

test.before(() => {
  sandbox = new Sandbox()
    .withTemplate()
    .withConfig();
});

test.after.always(() => {
  sandbox.destroy();
});

test('should display help when call cli with --help', (t) => {
  t.regex(sandbox.execSyncIn('redoc --help'), /Usage: redoc \[options] \[command]/im);
});

test('should return a correct version number', (t) => {
  t.regex(sandbox.execSyncIn('redoc --version'), /\d\.\d\.\d/);
});
