const Sandbox = require('./fixtures/sandbox');

describe('Run', () => {
  let sandbox;
  beforeAll(() => {
    sandbox = new Sandbox()
      .withTemplate()
      .withConfig();
  });

  afterAll(() => {
    sandbox.destroy();
  });

  test('should be ok', () => {
    expect(true).toBeTruthy();
  });
});
