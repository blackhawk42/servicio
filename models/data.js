const {Schema} = require('mongoose');
const mongoose = require('mongoose');

const Data = new Schema({
	alumnoId: String,
	recordar: Number,
	entender: Number,
	aplicar: Number,
	analizar: Number,
	evaluar: Number,
	crear: Number,
	m: Number,
	valor: Number,
	variableLinguistica: String
});

module.exports = mongoose.model('Data', Data)