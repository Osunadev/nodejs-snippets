/** Modules */
const path = require('path');
const express = require('express');
const hbs = require('hbs');
require('dotenv').config(); // Loading environment variables from our .env file

const app = express();
const PORT = process.env.PORT || 5000;

/** Paths */
// const publicDirectoryPath = path.join(__dirname, '../../public'); // The path of our public folder where our assets are stored
const viewsDirectoryPath = path.join(__dirname, '../../templates/views');
const partialsPath = path.join(__dirname, '../../templates/partials');

hbs.registerPartials(partialsPath);

/** Middlewares */
// This is just an example middleware
// const checkJsonContent = require('./middleware/check-json');
// app.use(checkJsonContent);

/**
 * We can use this express server to serve both static files and api endpoints
 * But, if the user access to a path for example 'localhost:4000/', then, the middleware
 * will return first an index.js instead of running the app.get('/') route, because the
 * middleware is placed first
 */
// app.use(express.static(publicDirectoryPath)); // Express middleware for our static files

app.set('view engine', 'hbs');
app.set('views', viewsDirectoryPath);

/** Routes */
app.get('/', (req, res) => {
  res.render('index', {
    name: 'Omar Osuna',
  });
});

// app.get('/hello', (req, res) => {
//   res.send('Hello');
// });

// app.get('/data', (req, res) => {
//   res.status(200).json({
//     name: 'Omar Osuna',
//     email: 'omar.osuna.angulo@gmail.com',
//   });
// });

// app.get('*', (req, res) => {
//   res
//     .status(404)
//     .send('<h1 style="color: red;"><strong>Route not found!</strong></h1>');
// });

/** Listen */
app.listen(PORT, () => {
  console.log('Express server running on port: ' + PORT);
});
