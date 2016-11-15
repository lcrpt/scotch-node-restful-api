'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
let contacts = require('./data');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/contacts', (request, response) => {
  if (!contacts) {
    response.status(404).json({ message: 'No contact found' });
  }

  response.json(contacts);
});

app.get('/api/contacts/:id', (request, response) => {
  const requestId = request.params.id;

  let contact = contacts.filter(contact => {
    return contact.id == requestId;
  });

  if (!contacts) {
    response.status(404).json({ message: 'No contact found' });
  }

  response.json(contact[0]);
});

const hostname = 'localhost';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
