var express = require('express');
var router = express.Router();
const jsvalidator = require('jsonschema').validate;
const fs = require('fs');

const Data = require('../models/data');
const weights = require('../config/weights');

const schema = JSON.parse(fs.readFileSync("./assets/schemas/processing.json", "utf-8"));

// Valores por propósito de demostración
function process(post, weights) {
	return [
		Math.random(),
		Math.random(),
		Math.random(),
		Math.random(),
		Math.random(),
		Math.random(),
		Math.random(),
		Math.random(),
		"Pasable=0.4; Medio=01",
	]
}

router.post('/', async function(req, res) {
	console.log(req.body);
	let errors = jsvalidator(req.body, schema).errors;
	console.log(errors);

	if(errors.length != 0) {
		res.send(400).json({'error': `schema validation failed: ${errors}`});
		return
	}

	let proccesed = process(req.body, weights);
	let alumnoId = req.body.alumnoId;

	let data = new Data({
		alumnoId: alumnoId,
		recordar: proccesed[0],
		entender: proccesed[1],
		aplicar: proccesed[2],
		analizar: proccesed[3],
		evaluar: proccesed[4],
		crear: proccesed[5],
		m: proccesed[6],
		valor: proccesed[7],
		variableLinguistica: proccesed[8]
	})
	data.save();

	res.status(200).json({"message": "Datos recividos"});
});

module.exports = router;