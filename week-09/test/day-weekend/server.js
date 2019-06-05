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
                res.status(400).send('Your alias is already in use!');
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
                            conn.query(
                                'SELECT * FROM URL_Aliasing WHERE alias = ?',
                                [alias || ''],
                                (err, rows) => {
                                    if (err) {
                                        console.error(err);
                                    } else {
                                        let aliasW = rows[0].alias;
                                        let secretCodeW = rows[0].secret_code;
                                        let responseObject = {
                                            message: `Your URL is aliased to <strong>${aliasW}</strong> and your secret code is <strong>${secretCodeW}</strong>.`,
                                            sendedRows : rows[0]    
                                        }
                                        res.status(200).send(responseObject);

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
    return `${getARandomNumber(1, 9)}${getARandomNumber(0, 9)}${getARandomNumber(0, 9)}${getARandomNumber(0, 9)}`;
}

function getARandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT} 🔥`);
});