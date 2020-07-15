/** Modules */
const path = require('path');
const express = require('express');
require('dotenv').config(); // Loading environment variables from our .env file

const app = express();

/** Paths */
const publicDirectoryPath = path.join(__dirname, '../../public'); // The path of our public folder where our assets are stored

const PORT = process.env.PORT || 5000;

/** Middlewares */

// This is just an example middleware
// const checkJsonContent = require('./middleware/check-json');
// app.use(checkJsonContent);

/** Static Files */
// We can use this express server to serve both static files and api endpoints
// But, if the user access to a path for example 'localhost:4000/', then, the middleware
// will return first an index.js instead of running the app.get('/') route, because the
// middleware is placed first
app.use(express.static(publicDirectoryPath)); // Express middleware for our static files

/** Routes */
app.get('/hello', (req, res) => {
  res.send('Hello');
});

app.get('/data', (req, res) => {
  res.status(200).json({
    name: 'Omar Osuna',
    email: 'omar.osuna.angulo@gmail.com',
  });
});

app.get('*', (req, res) => {
  res
    .status(404)
    .send('<h1 style="color: red;"><strong>Route not found!</strong></h1>');
});

/** Listen */
app.listen(PORT, () => {
  console.log('Express server running on port: ' + PORT);
});
