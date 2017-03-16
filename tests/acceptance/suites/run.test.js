import test from 'ava';
import Sandbox from '../fixtures/sandbox';

let sandbox;

test.before(() => {
  sandbox = new Sandbox()
    .withTemplate('simple-react')
    .withConfig('default');
});

test('should be ok', (t) => {
  t.is(true, true);
});

test.after.always(() => {
  sandbox.destroy();
});
