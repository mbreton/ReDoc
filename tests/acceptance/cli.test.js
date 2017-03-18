const Sandbox = require('./fixtures/sandbox');

describe('CLI', () => {
  let sandbox;
  beforeAll(() => {
    sandbox = new Sandbox()
      .withTemplate()
      .withConfig();
  });

  afterAll(() => sandbox.destroy());

  test('should display help when call cli with --help', () => {
    expect(sandbox.execSyncIn('redoc --help')).toMatch(/Usage: redoc \[options] \[command]/im);
  });

  test('should return a correct version number', () => {
    expect(sandbox.execSyncIn('redoc --version')).toMatch(/\d\.\d\.\d/);
  });
});
