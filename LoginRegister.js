'use strict';


var index = require('./index');
var helper = require('./helpers/helper');

//mongodb
var Users = require('./schemas/Users');
const mongoose = require('./mongodb').mongoose;


function Login(data, socket) {

	var dataParsed = helper.jsonDecode(socket, data);
	if (dataParsed !== null) {

		Users.findOne(query).exec(function (err, user) {
			if (err) {
				helper.sendNotification("Error", "Error in login process...", "Error", "", 2.0, socket);
				index.sendToSelf(socket, 'loginResult', {
					id: ""
				});
				return;
			} //index.sendToSelf(socket, 'registerResult', { result: "Error" });//socket.emit('registerResult', { result: "Error" });

			if (user !== null) {
				

				var response = {
					id: user._id,
					name: user.name,
					gender: user.gender,
					lang: index.players[socket.id].lang,
					key: index.players[socket.id].key,
					numberSocket: index.players[socket.id].numberSocket
				};

				


				index.sendToSelf(socket, 'loginResult', response);

			} else {
				console.log("algo no ha ido bien en la query");
			}
		});
	}

}

module.exports = {
	Login: Login,
	Register: Register
};