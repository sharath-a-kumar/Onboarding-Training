// controllers/personController.js

const Person = require('../Models/PersonModel');

exports.createPerson = async (req, res) => {
  try {
    const newPerson = new Person(req.body);
    const savedPerson = await newPerson.save();
    res.status(201).json(savedPerson);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllPeople = async (req, res) => {
  try {
    const people = await Person.find({});
    res.json(people);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPersonById = async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) {
      return res.status(404).json({ message: 'Person not found' });
    }
    res.json(person);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePersonById = async (req, res) => {
  try {
    const updatedPerson = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPerson) {
      return res.status(404).json({ message: 'Person not found' });
    }
    res.json(updatedPerson);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePersonById = async (req, res) => {
  try {
    const deletedPerson = await Person.findByIdAndDelete(req.params.id);
    if (!deletedPerson) {
      return res.status(404).json({ message: 'Person not found' });
    }
    res.json({ message: 'Person deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

