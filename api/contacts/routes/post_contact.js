'use strict';

const mongoose = require('mongoose');
const Contact = require('../model/Contact');

module.exports = (req, res) => {
  const contact = new Contact(req.body);

  contact.save((err, contact) => {
    if (err) {
      res.status(400).json(err);
    }

    res.json(contact);
  });
};
