'use strict';

const exp = require('express');
const PORT = 6969;
const app = exp();
const eskweel = require('mysql');
const path = require('path');
require('dotenv').config();

app.use('/public', exp.static('public'));
app.use(exp.json());

const conn = eskweel.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});
conn.connect(err => {
    if (err) {
        console.log(err.toString());
        return;
    }
    console.log('connection to DB is OK ✨');
});
//---------------------------------------------------------------
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/game.html')
});

app.get('/game', (req, res) => {
    conn.query(`
    SELECT * FROM  questions
        INNER JOIN answer
        ON questions.id = answer.id`, (err, rows) => {
            if (err) {
                console.log(err);
                return;
            }
            let quiz = rows[Math.floor(Math.random() * 5)];
            res.json(quiz)
        });
})
app.listen(PORT, () => {
    console.log('Server is up and running ✨');
});
