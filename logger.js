const winston = require('winston');
require('winston-mongodb');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.MongoDB({
      db:process.env.MONGO_URI,
      collection: 'logs',
    })
  ]
});

module.exports = logger;