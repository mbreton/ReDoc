const winston = require('winston');

winston.loggers.add('cli', {
  console: {
    level: 'info',
    colorize: true,
    label: 'cli logger',
    formatter(options) {
      return `${(options.message ? options.message : '')}`;
    },
  },
});

winston.loggers.add('internal', {
  console: {
    level: 'debug',
    colorize: true,
    timestamp: true,
    label: 'sgr',
  },
});

module.exports = winston.loggers;
