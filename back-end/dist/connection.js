"use strict";
// Connection setup for database & client:
const { Pool } = require('pg');
const dbParams = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    ssl: process.env.SSL
};
const db = new Pool(dbParams);
db.connect();
module.exports = db;
