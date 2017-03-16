const logger = require('../logger').internal;
const scan = require('../scanners');
const theme = require('../themes/default');

function run() {
  scan()
    .then((scanResults) => {
      scanResults.forEach((scanResult) => {
        const json = JSON.stringify(scanResult);
        logger.debug(json);
      });
      return theme.render(scanResults);
    })
    .then(() => logger.debug('Scan completed'))
    .catch(e => logger.error('Scan failed !', e));
}

module.exports = run;
