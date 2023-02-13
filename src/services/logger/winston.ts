import winston, { format } from 'winston';

const { combine, timestamp, prettyPrint } = format;

export const logger = winston.createLogger({
  level: 'debug',
  format: combine(timestamp(), prettyPrint()),
  transports: [
    new winston.transports.Console({ format: winston.format.simple() })
  ]
});
