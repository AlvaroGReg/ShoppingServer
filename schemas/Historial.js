const mongoose = require('../mongodb').mongoose;

const HistorialModel = new mongoose.Schema({
  name : String,
  quantity : Number,
  img : String
});

HistorialModel.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('_Historial', HistorialModel, '_Historial');