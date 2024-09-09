
const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import database connection
const connection = require('./config/database');

// Import routes
const apiRoutes = require('./routes/api');
const postRoutes = require('./routes/postRoutes');
const webRoutes = require('./routes/web');

// Use routes
app.use('/api', apiRoutes);
app.use('/posts', postRoutes);
app.use('/', webRoutes);

module.exports = { app, connection };