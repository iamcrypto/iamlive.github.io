const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'tiranga',
    password: 'tiranga',
    database: 'tiranga',
});

export default connection;