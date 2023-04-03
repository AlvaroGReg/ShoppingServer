const mongoose = require('../mongodb').mongoose;

const UserModel = new mongoose.Schema({
  name: String,
  privateData: {
    password: String,
    email: String
  }
});

UserModel.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('_Users', UserModel, '_Users');