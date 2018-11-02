const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const routes = require('./routes');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());

// const { Client } = require('pg');

// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: true,
// });

// client.connect();

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(express.static(path.join(__dirname, 'client/build')));

//  Connect all our routes to our application
app.use('/api', routes);


// Handle React routing, return all requests to React app
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));