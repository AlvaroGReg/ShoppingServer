'use strict';

var index = require('../index');

var ItemsStore = require('../schemas/ItemsStore');
const mongoose = require('../mongodb').mongoose;

module.exports = {

  jsonDecode: function(socket, jsonData, bypassLogin = false){

    if(!bypassLogin && index.players[socket.id] === undefined){
      //console.log('Not Logged');
      return null;
    }
    var parsed;
    try {
      parsed = JSON.parse(jsonData.trim());
    } catch (err) {
      console.log('Could not parse incoming data on TCP socket: ', jsonData);
      return null;
    }
    return parsed;
  }

}