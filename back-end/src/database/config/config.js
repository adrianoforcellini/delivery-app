require('dotenv').config();

module.exports = {
   development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'delivery-app-test',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  test: {
    username: process.nodeMySQL,
    password: process.env.MYSQL_PASSWORD,
    database: 'delivery-app-test',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'delivery-app',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
};
