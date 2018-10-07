const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const routes = require('./routes');

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

app.use(express.static(path.join(__dirname, 'client/dist/')));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//  Connect all our routes to our application
app.use('/api', routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));