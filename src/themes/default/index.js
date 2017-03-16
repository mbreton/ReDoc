class DefaultTheme {
  constructor({ logger }) {
    this.logger = logger;
  }
  render() {
    this.logger.debug('Rendering docs ...');
  }
}

const logger = require('../../logger').internal;

function DefaultThemeFactory() {
  return new DefaultTheme({ logger });
}

module.exports = DefaultThemeFactory();
module.exports.Theme = DefaultTheme;
