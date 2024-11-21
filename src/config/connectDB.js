const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'dbtiran.cjakccac2nys.ap-south-1.rds.amazonaws.com',
  user: 'admin',
  password: 'Ajax24x7#365',
  database: 'victory',
  port: '3306' 
   
});

export default connection;
<<<<<<< HEAD

/*
    host: 'localhost',
  user: 'triranga',
  password: '3ranga#365',
  database: 'tiranga'

    
      
    */
   
=======
>>>>>>> 56c5c21837bf33626c20107b9a802892abe9fe02
