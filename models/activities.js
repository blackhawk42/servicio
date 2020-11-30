const {Schema} = require('mongoose');
const mongoose = require('mongoose');

const Activity = new Schema({
	// Id numérica de la pregunta
	id: Number,
	pregunta: String,
	// Si está vació, es una pregunta abierta
	posiblesRespuestas: [String],
	// La respuesta considerada correcta
	respuestaCorrecta: [String],
	// La taxonomía de Bloom correspondiente a esta pregunta
	taxonomiaBloom: [String]
});

module.exports = mongoose.model('Activity', Activity);