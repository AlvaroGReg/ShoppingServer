const mysql = require('mysql');

// Crear una conexión con la base de datos MySQL
const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

function getTable(tableName){
 const sql = 'SELECT * FROM `'+ tableName +'` WHERE 1';

 console.log(db.query(sql));
}

function addData(req,res){

 // Obtener datos del formulario
    const nombre = req.body.nombre;
    const telefono = req.body.telefono;
    const esSoltero = req.body.esSoltero ? 1 : 0;

    // Ejecutar consulta SQL con parámetros preparados
    const sql = 'INSERT INTO `table-test` (name, tlf, soltero) VALUES (?, ?, ?)';
  
    db.query(sql, [nombre, telefono, esSoltero], (err, result) => {
        if (err) {

            console.log(err);
            return res.status(500).send(err.message);
        }

        console.log('Registro insertado en la base de datos');
        res.send('Registro insertado en la base de datos');
  });

}
        // Cerrar la conexión con la base de datos
  //db.end();
// Exportar la función addData para su uso en otros archivos
module.exports = { addData, getTable };