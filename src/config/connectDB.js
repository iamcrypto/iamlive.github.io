const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'sql12.freesqldatabase.com',
    user: 'sql12744668',
    password: 'uRMKtNH55m',
    database: 'sql12744668',
    port: '3306'

});

export default connection;