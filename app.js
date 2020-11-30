const serviceConfig = require("./config/service_config");

const dbConfig = require('./config/db');
const mongoose = require('mongoose');
mongoose.connect(`mongodb://${dbConfig.host}/${dbConfig.dbName}`, {useNewUrlParser: true});

var express = require('express');
var app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json({ extended: true}));

const reportRouter = require('./routes/report');
const schemaRouter = require('./routes/schema');
const dataRouter = require('./routes/data');
const activitiesRouter = require('./routes/activities');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(serviceConfig.routes.report, reportRouter);
app.use('/schemas', schemaRouter);
app.use(serviceConfig.routes.processing, dataRouter);
app.use(serviceConfig.routes.activities, activitiesRouter);

app.listen(serviceConfig.port);
