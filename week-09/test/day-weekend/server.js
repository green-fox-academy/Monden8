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
    res.sendFile(__dirname + '/public/index.html')
});
//---------------------------------------------------------------
app.post('/api/links', (req, res) => {
    const { url, alias } = req.body;
    conn.query(
        'SELECT * FROM URL_Aliasing Where alias = ?',
        [alias || ''], (err, rows) => {
            if (err) {
                console.error(err);
            } else if (rows.length > 0) {
                res.status(405).send('Your alias is already in use!');
            } else {
                // create one
                let secretCode = generateSecretCode();
                conn.query(
                    'INSERT INTO URL_Aliasing (url, alias, secret_code) VALUES (?, ?, ?)',
                    [url, alias, secretCode],
                    (err, rows) => {
                        if (err) {
                            console.error(err);
                        } else {
                            // read back and WRITE OUT "Your URL is aliased to {alias} and your secret code is {secretCode}.""
                            conn.query(
                                'SELECT * FROM URL_Aliasing WHERE alias = ?',
                                [alias || ''],
                                (err, rows) => {
                                    if (err) {
                                        console.error(err);
                                    } else {
                                        let aliasW = rows[0].alias;
                                        let secretCodeW = rows[0].secret_code;
                                        res.status(200).send(`Your URL is aliased to ${aliasW} and your secret code is ${secretCodeW}.`);
                                    }
                                },
                            );
                        }
                    },
                );
            }
        },
    );
});
//-----------------------------------------------
function generateSecretCode() {
    return `${getARandomNumber(0, 9)}${getARandomNumber(0, 9)}${getARandomNumber(0, 9)}${getARandomNumber(0, 9)}`;
}

function getARandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT} 🔥`);
});