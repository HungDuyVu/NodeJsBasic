// get the client
import mysql from 'mysql2';

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'nodejsbasic'
});

// simple query
// connection.query(
//   'SELECT * FROM `user`',
//   function(err, results, fields) {
//      console.log('>>> clheck mysql');
//     console.log(results); // results contains rows returned by server
//     let rows =results.map((row) => { return row });
//     console.log(results[0]); // fields contains extra meta data about results, if available
//   }
// );

export default connection;