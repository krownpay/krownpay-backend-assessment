import winston from 'winston';

export const logger = winston.createLogger({
  level: 'debug',
  defaultMeta: { service: 'backend-service' },
  transports: [
    new winston.transports.Console({ format: winston.format.simple() })
  ]
});
