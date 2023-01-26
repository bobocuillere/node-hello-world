'use strict';

const express = require('express')
const app = express();

const port = 7000;
const host = '15.237.128.62';

app.get('/', (req, res) => {
res.send('<html><body><h1>Bonjour, ma nouvelle feature avec un pipeline jenkins</h1><form action="/submit" method="post"><input type="submit" value="Click Me"></form></body></html>');
})
app.post('/submit', (req, res) => {
res.send('Button Clicked!');
});
app.listen(port, host);
console.log('Running on http://${host}:${port}');
