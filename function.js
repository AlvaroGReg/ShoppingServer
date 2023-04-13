const db = require("./connection");


function get_best_sellers()
{
  const sql = 'SELECT * FROM `kittens` WHERE 1';
  db.query(sql, function (err, result, fields) {
    console.log(result);
    return result;
  });
}

function getAll(req, res){
 const sql = 'SELECT * FROM `kittens` WHERE 1';
  //return "jajsjas no es una funcion";
  db.query(sql, function (err, result, fields) {
    //console.log(result);
    res.send(result);
  });
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
  db.end();

}
        // Cerrar la conexión con la base de datos
  //db.end();
// Exportar la función addData para su uso en otros archivos
module.exports = { 
  get_best_sellers, 
  getAll,
  addData
};