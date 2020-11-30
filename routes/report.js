var express = require('express');
var router = express.Router();

const jsvalidator = require('jsonschema').validate;
const fs = require('fs');
const schema = JSON.parse(fs.readFileSync("./assets/schemas/report.json", "utf-8"));

const Data = require('../models/data');

router.get('/', async function(req, res) {
	let rawData = await Data.find({});
	let results = [];
	for(rd of rawData) {
		results.push({
			alumnoId: rd.alumnoId,
			recordar: rd.recordar,
			entender: rd.entender,
			aplicar: rd.aplicar,
			analizar: rd.analizar,
			evaluar: rd.evaluar,
			crear: rd.crear,
			m: rd.m,
			valor: rd.valor,
			variableLinguistica: rd.variableLinguisticas
		});
	}

	let errors = jsvalidator(results, schema).errors;
	console.log(errors);

	if(errors.length != 0) {
		res.status(500).json({"error": `error validando el esquema: ${errors}`});
		return
	}

	res.status(200).json(results)
});

router.get('/:id', async function(req, res) {
	let result = await Data.findOne({alumnoId: req.params.id});

	if(!result) {
		res.status(404).json({"error": `no se encontró entrada con id de usuario: ${req.params.id}`});
		return
	}

	res.status(200).json({
		alumnoId: result.alumnoId,
		recordar: result.recordar,
		entender: result.entender,
		aplicar: result.aplicar,
		analizar: result.analizar,
		evaluar: result.evaluar,
		crear: result.crear,
		m: result.m,
		valor: result.valor,
		variableLinguistica: result.variableLinguisticas
	});
});

module.exports = router;