let db = require("./db/connection");
const express = require('express');
const app = express();

// Configurar Express para manejar el formulario
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Definir una función para manejar las rutas y archivos HTML
function manejarRutas(ruta, archivoHTML) {
  app.get(ruta, (req, res) => {
    res.sendFile(__dirname + '/' + archivoHTML);
  });
  
  app.post(ruta, (req, res) => {
    if(ruta=='/formulario'){
     //res.send('¡Mensaje enviado con éxito!'); 
      db.addData(req,res);
    }
    //res.send('¡Mensaje enviado con éxito!'); // Enviar una respuesta al cliente
  });
}

// Llamar a la función para definir las rutas y archivos HTML
manejarRutas('/', 'index.html',); // Ruta para la página de inicio
manejarRutas('/formulario', '')
//manejarRutas('/contacto', 'contacto.html'); // Ruta para la página de contacto
// Agregar más llamadas a la función para definir más rutas y archivos HTML

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor web iniciado en http://localhost:3000');
});