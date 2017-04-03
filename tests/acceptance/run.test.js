// @flow
import manager from './fixtures/sandbox-manager';

describe('Run', () => {
  beforeAll(() => manager
      .createSandbox()
      .withTemplate()
      .withConfig());

  test('should be ok', () => {
    expect(true).toBeTruthy();
  });
});
