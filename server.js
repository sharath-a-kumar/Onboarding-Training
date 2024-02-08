const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Mock data to simulate saving the form data
const submittedForms = [];

app.post('/submitAdoptionForm', (req, res) => {
  const formData = req.body;

  // Mock: Save form data
  submittedForms.push(formData);

  // Mock: Respond with the saved form data
  res.status(200).json(formData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
