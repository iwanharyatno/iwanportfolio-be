require('dotenv').config();

const express = require('express');
const app = express();

const contactRoute = require('./routes/contact');

app.use(express.json());

app.use('/api/feedback', contactRoute);

app.use('/api/ping', (req, res) => {
    return res.send("pong");
})

const PORT = process.env.PORT ?? 5000;

app.listen(PORT, () => {
    console.log('App listening on port: ' + PORT);
});