const express = require('express');
require('./db/mongodb');

const Person = require('./models/person');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

// Endpoint to create a person
app.post('/person', async (req, res) => {
  const newPerson = new Person(req.body);

  try {
    const savedPerson = await newPerson.save();
    res.status(200).send(savedPerson);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
