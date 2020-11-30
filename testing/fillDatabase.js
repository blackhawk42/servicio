const dbConfig = require('../config/db');
const mongoose = require('mongoose');
const Activity = require('../models/activities');
mongoose.connect(`mongodb://${dbConfig.host}/${dbConfig.dbName}`, {useNewUrlParser: true});

Activity.create([
	{
		id: 1,
		pregunta: "Una caja en forma de prisma rectangular tiene 4.5 cm de ancho y 3 cm de alto, y su volumen es de 81 cm3. ¿Cuánto mide de largo? ¿Cuál es el valor desconocido en el problema?",
		posiblesRespuestas: ["Alto", "Ancho", "Largo"],
		respuestaCorrecta: "Largo",
		taxonomiaBloom: ["evaluar", "crear"]
	},
	{
		id: 2,
		pregunta: "La población de una ciudad aumentó en 5689 personas durante cierto año, haciendo un total de 157,743. ¿A qué número debemos sumar 5689 para que dé 157,743? ¿Cuál es el valor desconocido en el problema?",
		posiblesRespuestas: ["La población inicial", "La población final", "La población total"],
		respuestaCorrecta: "La población inicial",
		taxonomiaBloom: ["evaluar", "crear"]
	},
	{
		id: 3,
		pregunta: "Dentro de un año, Amanda tendrá el triple de la edad que tenía hace nueve años. ¿Qué edad tiene Amanda ahora? ¿Cuál es el valor desconocido en el problema?",
		posiblesRespuestas: ["La edad que Amanda tenía hace nueve años", "La edad que Amanda tiene ahora", "La edad que Amanda tendrá dentro de un año"],
		respuestaCorrecta: ["La edad que Amanda tiene ahora"],
		taxonomiaBloom: ["evaluar", "crear"]
	}
]);