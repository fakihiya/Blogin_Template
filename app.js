const express = require('express');
const apiRoutes = require('./routes/api');
const webRoutes = require('./routes/web');

const app = express();

// middlewares
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use("/api", apiRoutes);
app.use("/", webRoutes);

module.exports = app;