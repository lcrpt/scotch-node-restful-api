'use strict';

const mongoose = require('mongoose');
const Contact = require('../model/Contact');

module.exports = (req, res) => {
  Contact.find({}, (err, contacts) => {
    if (err) {
      res.status(400).json(err);
    }

    res.json(contacts);
  });
};
