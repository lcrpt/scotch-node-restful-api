'use strict';

const express = require('express');
const contactRoutes = express.Router();

contactRoutes.get('/', require('./get_contacts'));
contactRoutes.get('/:id', require('./get_contact'));
contactRoutes.post('/', require('./post_contact'));
contactRoutes.put('/:id', require('./put_contact'));
contactRoutes.delete('/:id', require('./delete_contact'));

module.exports = contactRoutes;
