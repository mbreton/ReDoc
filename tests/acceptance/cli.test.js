// @flow
import manager from './fixtures/sandbox-manager';

describe('CLI', () => {
  let sandbox;
  beforeAll(() => {
    sandbox = manager
      .createSandbox()
      .withTemplate()
      .withConfig();
  });

  test('should display help when call cli with --help', () => {
    expect(sandbox.execSyncIn('redoc --help')).toMatch(/Usage: redoc \[options] \[command]/im);
  });

  test('should return a correct version number', () => {
    expect(sandbox.execSyncIn('redoc --version')).toMatch(/\d\.\d\.\d/);
  });
});
