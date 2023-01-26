'use strict';

const express = require('express');
const app = express();

// Serve static files from the "public" directory
app.use(express.static("public"));

const port = 7000;
const host = '0.0.0.0';

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <link rel="stylesheet" type="text/css" href="public/styles.css">
            </head>
            <body>
                <h1>Bonjour, ma nouvelle feature est tout beau, tout neuve !</h1>
                <form action="/submit" method="post">
                    <input type="submit" value="Click Me">
                </form>
            </body>
        </html>
    `);
});
app.post('/submit', (req, res) => {
    res.send('Button Clicked!');
});
app.listen(port, host);
console.log(`Running on http://${host}:${port}`);
