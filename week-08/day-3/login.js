'use strict';

const exp = require('express');
const app = exp();
const PORT = 3000;
const path = require('path');
const bp = require('body-parser');

//app.use(bp.urlencoded({ extended: true }));
app.use(exp.urlencoded({ extended: true }));
app.use('/static',exp.static('static'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html')
})
app.post('/login', (req, res) => {
    console.log(req.body.username);
    res.send(req.body.password);
});

app.listen(PORT, () => {
    console.log(`Yo my n*gga I'm listenin' on ${PORT}. Wazzup dog ?`);
});