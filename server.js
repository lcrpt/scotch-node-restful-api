'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const uriUtil = require('mongodb-uri');

let contacts = require('./data');

const mongodbUri = 'mongodb://leolassence:kjkszpj@ds153677.mlab.com:53677/scotch-node-restful-api';
const mongooseUri = uriUtil.formatMongoose(mongodbUri);
const dbOptions = {};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/contacts', require('./api/contacts/routes/post_contact'));
app.use('/api/contacts', require('./api/contacts/routes/get_contacts'));
app.use('/api/contacts', require('./api/contacts/routes/get_contact'));
app.use('/api/contacts', require('./api/contacts/routes/put_contact'));
app.use('/api/contacts', require('./api/contacts/routes/delete_contact'));

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
