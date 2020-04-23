const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

console.log("I'm in the server.js code."); 

app.get('/', (req, res) => {
  
  res.end("Hello library nerds....");
});

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.listen(3000, () =>
  console.log('Express server is running on localhost:3000')
);
