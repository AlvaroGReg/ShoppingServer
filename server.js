let db = require("./connection");
const express = require('express');
const app = express();

// Configurar Express para manejar el formulario
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Definir una función para manejar las rutas y archivos HTML
function manejarRutas(ruta, archivoHTML) {
	/*
	GET: Lleva los datos de manera visible desde el cliente al servidor usando la url,
	en esta funcion de tu servidor, lo recibiria. Cada vez que abres una url exista o no,
	en tu web, envias una solicitud GET al servidor para que te devuelva algo como algun dato,
	un html etc. EJ: http://miweb.com/adduser?nombre=Paco&edad=33
	Otro ejemplo de uso, podria ser que tienes un sistema de referidos, donde alguien solamente
	clickando en el link, se abre la web de registro de usuario y sabes de parte de quien viene ese nuevo usuario.
	podrias por ejemplo: http://miweb.com?refer=879234hnn8323re, siendo "879234hnn8323re" un id que tengas almacenado
	del usuario que ha compartido su link de referido
	*/
	app.get(ruta, (req, res) => {
		res.sendFile(__dirname + '/' + archivoHTML);
	});

	/*
	POST: Lleva los datos de manera invisible desde el cliente al servidor, no por ello es mas seguro
	ya que se puede replicar una solicitud post de manera muy sencilla, pero es mayormente usado para envio de formularios,
	ajax, o cualquier otro tipo de solicitudes donde no necesitas mas que enviar datos, (inspecciona la pagina y se pueden ver los datos enviados).
	Con este sistema no podrias hacer un sistema de referidos ya que cuando alguien clicka en la web, no tienes como enviar POST.
	*/
	app.post(ruta, (req, res) => {
		if (ruta == '/formulario') {
			//res.send('¡Mensaje enviado con éxito!'); 
			db.addData(req, res);
		}
		//res.send('¡Mensaje enviado con éxito!'); // Enviar una respuesta al cliente
	});
	/*
	Nota: en ambos casos, tienes la "ruta" que lo usas como un "tag" para identificar que tipo de accion tienes que realizar.
	No importa que la url "no exista" como un archivo html, tu puedes decidir que hace cada url.
	EJ: cuando recibes una solicitud POST, en la giguiente url http://miweb.com/formulario sabes que tienes datos ocultos, y que
	la solicitud es para agregar un nuevo usuario, lo cual ya sabiendo de donde procede esa solicitud, sabes que datos tienes que tratar,
	y que es lo que tienes que hacer.
	Si por ejemplo recibes un GET, en tu caso lo unico que haces es retornar un archivo .hmtl que corresponde con la url solicitada
	*/
}

// Llamar a la función para definir las rutas y archivos HTML
manejarRutas('/', './web/index.html',); // Ruta para la página de inicio
manejarRutas('/formulario', '')
//manejarRutas('/contacto', 'contacto.html'); // Ruta para la página de contacto
// Agregar más llamadas a la función para definir más rutas y archivos HTML

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
	console.log('Servidor web iniciado en http://localhost:3000');
});