const axios = require("axios");
const jsvalidator = require('jsonschema').validate;
const fs = require('fs');
const { validate } = require("jsonschema");

const ctConfig = require("./config/ct_config");
const serviceConfig = require("./config/service_config");

const schema = JSON.parse(fs.readFileSync("./assets/schemas/service_config.json", "utf-8"));

console.log(jsvalidator(serviceConfig, schema).errors);

axios.post(`http://${ctConfig.host}:${ctConfig.port}/services`, serviceConfig)
.then((res) => {
	console.log(res);
});