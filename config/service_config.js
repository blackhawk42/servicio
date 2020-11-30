// No se requiere tener un archivo como este, pero esta información debe estar disponible.
const serviceConfig = {
	// Nombre del servicio, como será identificado en el sistema central.
	name: "Servicio ejemplo",
	// UUID única de este servicio
	uuid: "6a297cce-f47d-4468-b815-c1dfb9d96690",
	// Descripcion del servicio
	description: "Servicio que sirve de ejemplo de cómo diseñar, registrar y usar un servicio al Tutor Cognitivo",
	// Host de este servicio
	host: "localhost",
	// Puerto de este servicio
	port: 3333,
	// Rutas REST de las que el tutor necesita saber
	routes: {
		processing: "/data",
		processing_schema: "/schemas/processing.json",
		// De dónde se pueden obtener las actividades asociadas a este servicio (GET), y con que eschema
		activities: "/activities",
		activities_schema: "/schemas/activities.json",
		// De dónde recoger (GET) el reporte general hasta ahora, y su esquema (GET)
		report: "/report",
		report_schema: "/schemas/report.json"
	}
};

module.exports = serviceConfig;