// @flow
import { internal as logger } from '../logger';
import scan from '../scanners';
import theme from '../themes/default';

export default function run() {
  scan()
    .then((scanResults) => {
      scanResults.forEach((scanResult) => {
        const json = JSON.stringify(scanResult);
        logger.info(json);
      });
      return theme.render(scanResults);
    })
    .then(() => logger.info('Scan completed'))
    .catch(e => logger.error('Scan failed !', e));
}
