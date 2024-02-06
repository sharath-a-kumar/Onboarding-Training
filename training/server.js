const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const port = 3000;
app.use(cors());
app.use(bodyParser.json());

app.post('/submitAdoptionForm', (req, res) => {
  const formData = req.body;
 res.json({ message: 'Adoption form submitted successfully!', formData });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

