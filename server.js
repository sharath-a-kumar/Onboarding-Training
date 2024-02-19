const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const personRoutes = require('./routes/personRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Onboarding', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Middleware
app.use(bodyParser.json());

// Routes
app.use(personRoutes);
app.use(userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
