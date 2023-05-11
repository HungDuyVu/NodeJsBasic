// import mysql from 'mysql2/promise';

// // // create the connection to database

// console.log("Creating connection pool...");

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'phonggym',
//     // password: 'password'
// })

// export default pool;

// const config = {
//  user: "sa", // Tên đăng nhập SQL Server
//  password: "1", // Mật khẩu đăng nhập SQL Server
//  server: "192.168.112.1", // Tên máy chủ SQL Server
//  database: "test", // Tên cơ sở dữ liệu SQL Server
//  options: {
//   trustedConnection: true,
//   encrypt: true,
//   enableArithAbort: true,
//   trustServerCertificate: true,
//  },
// };

const { Sequelize } = require("sequelize");

const pool = new Sequelize("gym", "sa", "1", {
 host: "localhost",
 dialect: "mssql",
 dialectOptions: {
  options: {
   encrypt: true,
  },
 },
});

pool
 .authenticate()
 .then(() => {
  console.log("Connected to SQL Server successfully.");
 })
 .catch((err) => {
  console.log("Error while connecting to SQL Server:", err);
 });

export default pool;
