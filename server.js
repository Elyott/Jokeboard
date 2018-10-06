const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const routes = require('./routes');

app.use(express.static(path.join(__dirname, 'client')));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//  Connect all our routes to our application
app.use('/api', routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));