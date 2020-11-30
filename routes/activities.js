var express = require('express');
var router = express.Router();
const jsvalidator = require('jsonschema').validate;
const fs = require('fs');
const Activity = require('../models/activities');

const schema = JSON.parse(fs.readFileSync("./assets/schemas/activities.json", "utf-8"));

router.get('/', async function(req, res) {
	let activities = await Activity.find({})
	let result = [];
	//console.log(activities);
	for(let i = 0; i < activities.length; i++) {
		result.push({
			id: activities[i].id,
			pregunta: activities[i].pregunta,
			posiblesRespuestas: activities[i].posiblesRespuestas,
			taxonomiaBloom: activities[i].taxonomiaBloom
		})
	}
	console.log(result);

	let errors = jsvalidator(result, schema).errors
	console.log(errors);

	if(errors.length == 0) {
		res.json(result);
	}
	else {
		res.status(500).json({'error': `schema validation failed: ${errors}`})
	}
});

module.exports = router;