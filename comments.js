// Create web server

// Import express
const express = require('express');

// Import mongoose
const mongoose = require('mongoose');

// Import body-parser
const bodyParser = require('body-parser');

// Import morgan
const morgan = require('morgan');

// Import path
const path = require('path');

// Import config file
const config = require('./config');

// Import routes
const routes = require('./routes');

// Create a server
const app = express();

// Connect to database
mongoose.connect(config.database, { useNewUrlParser: true });

// Listen for database connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database ' + config.database);
});

// Listen for database error
mongoose.connection.on('error', (err) => {
  console.log('Database error: ' + err);
});

// Port number
const port = 3000;

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', routes);

// Listen for server
app.listen(port, () => {
  console.log('Server started on port ' + port);
});