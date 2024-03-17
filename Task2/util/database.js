const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'default',
    database: 'node-complete',
    password: ''
});

module.exports = pool.promise();