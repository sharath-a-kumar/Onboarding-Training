// personModel.js

const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 0,
  },
});

personSchema.virtual('fullName').get(function () {
  return `${this.firstName} ${this.lastName}`;
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
