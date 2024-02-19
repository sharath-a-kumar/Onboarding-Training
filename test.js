const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Person = require('./Models/PersonModel');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/Onboarding', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(bodyParser.json());


app.post('/persons', async (req, res) => {
  try {
    const newPerson = new Person(req.body);
    const savedPerson = await newPerson.save();
    res.json(savedPerson);
  } catch (error) {
    console.error('Error creating person:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Read operation
app.get('/persons', async (req, res) => {
  try {
    const persons = await Person.find();
    res.json(persons);
  } catch (error) {
    console.error('Error fetching persons:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update operation
app.put('/persons/:id', async (req, res) => {
  try {
    const updatedPerson = await Person.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPerson) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json(updatedPerson);
  } catch (error) {
    console.error('Error updating person:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete operation
app.delete('/persons/:id', async (req, res) => {
  try {
    const deletedPerson = await Person.findByIdAndDelete(req.params.id);
    if (!deletedPerson) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json({ message: 'Person deleted successfully' });
  } catch (error) {
    console.error('Error deleting person:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
