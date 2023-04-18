let func = require("./functions");
const express = require('express');
const app = express();
var fs = require('fs');

// Configurar Express para manejar el formulario
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

/*
app.get('(/*)?', (req, res) => {
  res.sendFile(__dirname + req.url);
});
*/

// Definir una función para manejar las rutas y archivos HTML
//function manejarRutas(ruta, archivoHTML) {
  app.get('(/*)?', (req, res) => {
    
    //res.send(req.url)
    
    fs.exists(__dirname + "/web" + req.url , function (exist) {
      if (exist)
        res.sendFile(__dirname + '/web' + req.url);
      else
      {
          switch (req.url)
          {
            case "/getdata":
              func.getAll(req, res);
              //return db.getTable('kittens'); // https://catazon.glitch.me/getdata
              break;
            case "/getproducts":
              func.getAllProducts(req, res);
              break;
          }
      }
    });
  });

  app.post('(/*)?', (req, res) => {
    switch (req.url)
    {
      case "/formulario":
        func.addData(req, res);
        break;
      //case "/getdata":
        //db.getTable('kittens');
      //  break;
      default:
        res.status(500).send("Tatequieto");
        break;
    }
    
    /*
    if(req=='/formulario'){
     //res.send('¡Mensaje enviado con éxito!'); 
      db.addData(req.res);
    }else if(ruta=='/getdata'){
      db.getTable('kittens');
    }*/
    //res.send('¡Mensaje enviado con éxito!'); // Enviar una respuesta al cliente
  });
//}

// Llamar a la función para definir las rutas y archivos HTML
//manejarRutas('/', './web/index.html',); // Ruta para la página de inicio
//manejarRutas('/formulario', '')
//manejarRutas('getdata');

//manejarRutas('/contacto', 'contacto.html'); // Ruta para la página de contacto
// Agregar más llamadas a la función para definir más rutas y archivos HTML

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor web iniciado en http://localhost:3000');
});