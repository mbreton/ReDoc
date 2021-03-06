import winston from 'winston';

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
    label: 'ReDoc',
  },
});

winston.loggers.add('test', {
  console: {
    level: 'silly',
    colorize: true,
    timestamp: true,
  },
});

module.exports = {
  cli: winston.loggers.get('cli'),
  internal: winston.loggers.get('internal'),
  test: winston.loggers.get('test'),
};
