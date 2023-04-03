const mongoose = require('../mongodb').mongoose;

const UserModel = new mongoose.Schema({
  name: String,
  privateData: {
    password: String,
    email: String
  },
  birthdate: Number,
  history: [{ type: mongoose.Types.ObjectId, ref: '_Historial', autopopulate: true}],
});

UserModel.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('_Users', UserModel, '_Users');