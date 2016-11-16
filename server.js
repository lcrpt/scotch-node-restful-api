'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const uriUtil = require('mongodb-uri');
const contactRoutes = require('./api/contacts/routes');

const username = 'leolassence';
const password = 'kjkszpj';
const mongodbUri = `mongodb://${username}:${password}@ds153677.mlab.com:53677/scotch-node-restful-api`;
const mongooseUri = uriUtil.formatMongoose(mongodbUri);
const dbOptions = {};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/contacts', contactRoutes);

const hostname = 'localhost';
const port = 3000;

app.listen(port, hostname, () => {
  mongoose.connect(mongooseUri, dbOptions, (error) => {
    if (error) {
      console.error(error);
    }
  });

  console.log(`Server running at http://${hostname}:${port}`);
});
