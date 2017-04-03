// @flow
import { internal as logger } from '../../logger';


class DefaultTheme {
  render() {
    logger.debug('Rendering docs ...');
  }
}

export default new DefaultTheme();

