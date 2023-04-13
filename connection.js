const mysql = require('mysql');

// Crear una conexión con la base de datos MySQL
/*
const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});
*/
const db = mysql.createPool({
  connectionLimit:4,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

db.getConnection((err, connection) => {
  if(err)
    throw err;
  console.log("MySql connected!");
  connection.release();
});
/*
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
*/

//db.end();
// Exportar la función addData para su uso en otros archivos
module.exports = db;