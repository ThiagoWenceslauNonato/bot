let config = require('./config');

if (!config)
  throw new Error('unable to get database config');

Mongoose = require('mongoose').Mongoose;
mongoose = new Mongoose();

mongoose.config = config;
mongoose.Promise = global.Promise;
mongoose.connect(config, { useNewUrlParser: true });

let db = mongoose.connection;

db.on('error', function () {
  throw new Error('unable to connect to database at ' + config);
});

process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    process.exit(0);
  });
});

module.exports = mongoose;
