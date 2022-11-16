
const mysql = require('mysql2');

require("dotenv").config();
console.log(process.env);

const {DB_HOST, DB_USER, DB_DATABASE, DB_PORT, DB_PASSWORD}

const pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    database: DB_DATABASE,
    port: DB_PORT,
    password: DB_PASSWORD
  });

module.exports = pool;