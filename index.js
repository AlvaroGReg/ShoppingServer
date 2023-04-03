'use strict';

//Dear future me. Please forgive me.
//I can't even begin to express how sorry i am.

var app = require('express')();
var http = require('http');
var fs = require('fs');
var server = http.Server(app);
var bodyParser = require('body-parser');
var sanitize = require("mongo-sanitize");

app.use(bodyParser.json());


var users = [];

//Socket connection
var io = require('socket.io')(server, {
  pingTimeout: 60000,//15000, //3000
  pingInterval: 15000//500 //1000 //25000 (ultimo)
});



//io.set('transports', ['websocket']);

const port = process.env.PORT || 8080;
server.listen(port, function() {
  console.log("Server is now running in port... " + port);
});


//web
app.get('(/*)?', (req, res) => {
  //web.processWebGet(req, res);
});

app.post('(/*)?', (req, res) => {
  //web.processWebPost(req, res);
});

//si necesitas hacer algo cada X tiempo
setInterval(function () {
  //timeWeather.setNewWeather();
  //myCrypt.generateServerKey();
}, 60 * 60 * 1000);



io.on('connection', function(socket) {

  //jugador conectado
  console.log("Usuario conectado!");

  //LOGIN Y REGISTRO
  socket.on('Login', function(data) {
    console.log("Login request " + sanitize(data));
  });

  socket.on('Register', function(data) {
	console.log("Register request " + sanitize(data));
  });

  socket.on('disconnecting', function(){
    console.log("disconnecting");
  });

  
  socket.on('disconnect', function() {
    console.log("disconnect");
  });

  socket.on('reconnect', function() {
    console.log('reconnect fired!');
  });


});




// socket.broadcast.emit -> Manda respuesta a todos menos a quien lo envia
function sendToAllExceptItself(socket, key, value){
  socket.broadcast.emit(key, value);
}

// socket.emit -> Manda respuesta a quien lo envia
function sendToSelf(socket, key, value){
  socket.emit(key, value);
}

// io.in(socket.room).emit  -> Manda respuesta a todos los de la sala
function sendToRoom(room, key, value){
  io.in(room).emit(key, value);
}

// io.to(socketId).emit  -> Manda respuesta a un socket especifico
function sendToSocket(socketId, key, value){
  io.to(socketId).emit(key, value);
}

// socket.broadcast.to(socket.room).broadcast.emit  -> Manda respuesta a todos los de la sala menos a quien lo envia
function sendToRoomExceptItself(socket, room, key, value){
  socket.broadcast.to(room).emit(key, value)
  //socket.to(room).broadcast.emit(key, val);
}

// io.emit -> Manda respuesta a todos los usuarios conectados
function sendToAll(key, value){
  io.emit(key, value);
}




//export modules or variables
module.exports={
	users: users,
	sendToAllExceptItself: sendToAllExceptItself,
  	sendToSelf: sendToSelf,
  	sendToRoom: sendToRoom,
  	sendToSocket: sendToSocket,
  	sendToRoomExceptItself: sendToRoomExceptItself,
  	sendToAll: sendToAll
};


//Start other files
var mongo = require('./mongodb');




//console.log(Lang.GetText("Room_10x10", "EN", "Rooms"));

