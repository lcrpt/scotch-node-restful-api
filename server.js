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

// app.get('/api/contacts', (request, response) => {
//   if (!contacts) {
//     response.status(404).json({ message: 'No contact found' });
//   }
//
//   response.json(contacts);
// });
//
// app.get('/api/contacts/:id', (request, response) => {
//   const requestId = request.params.id;
//
//   let contact = contacts.filter(contact => {
//     return contact.id == requestId;
//   })[0];
//
//   if (!contacts) {
//     response.status(404).json({ message: 'No contact found' });
//   }
//
//   response.json(contact[0]);
// });
//
// app.post('/api/contacts/', (request, response) => {
//   const contact = {
//     id: contacts.length + 1,
//     first_name: request.body.first_name,
//     last_name: request.body.last_name,
//     email: request.body.email,
//     website: request.body.website,
//   };
//
//   contacts.push(contact);
//
//   response.json(contact);
// });
//
// app.put('/api/contacts/:id', (request, response) => {
//   const requestId = request.params.id;
//
//   let contact = contacts.filter(contact => {
//     return contact.id == requestId;
//   })[0];
//
//   const index = contacts.indexOf(contact);
//   const keys = Object.keys(request.body);
//
//   keys.forEach(key => {
//     contact[key] = request.body[key];
//   });
//
//   contacts[index] = contact;
//
//   response.json(contacts[index]);
// });
//
// app.delete('/api/contacts/:id', (request, response) => {
//   const requestId = request.params.id;
//
//   let contact = contacts.filter(contact => {
//     return contact.id == requestId;
//   })[0];
//
//   const index = contacts.indexOf(contact);
//
//   contacts.splice(index, 1);
//
//   response.json({ message: `User ${requestId} as been deleted` });
// });


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
