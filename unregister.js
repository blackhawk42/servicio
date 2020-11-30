const axios = require("axios");

const ctConfig = require("./config/ct_config");
const serviceConfig = require("./config/service_config");

axios.delete(`http://${ctConfig.host}:${ctConfig.port}/services/${serviceConfig.uuid}`)
.then((res) => {
	console.log(res);
});