'use strict';

const express = require('express')
const app = express();

const port = 7000;
const host = '0.0.0.0';

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
res.send('<html><body style="background-image:url(/background.jpg);"><h1>Bonjour, ma nouvelle feature est tout beau, tout neuve !</h1><form action="/submit" method="post"><input type="submit" value="Click Me"></form></body></html>');
})
app.post('/submit', (req, res) => {
res.send('Button Clicked!');
})

app.listen(port, host);
console.log(Running on http://${host}:${port});
