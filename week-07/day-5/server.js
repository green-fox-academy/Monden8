'use strict';


require('dotenv').config();
const exp = require('express');
const mysql = require('mysql');
const app = exp();
const PORT = 3000;

app.use(exp.json());

const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});
con.connect(err => {
    if (err) {
        console.log(err.toString());
        return;
    }
    console.log(`Connected to the Matrix ✔️`);
});

app.get('/posts', (req, res) => {
    con.query(`SELECT * FROM Reddit_Backend;`, (err, rows) => {
        if (err) {
            console.log(err.toString());
            res.status(500);
            return;
        }
        console.log('Dowloaded Matrix');
        res.status(200).json(rows);
    });
});

app.post('/posts', (req, res) => {
    con.query(`INSERT INTO Reddit_Backend(title,url) 
    VALUES("${req.body.title}","${req.body.url}");`, (err) => {
            if (err) {
                console.log(err.toString());
                res.status(500);
                return;
            }
            console.log('Updated Matrix');
            con.query(`SELECT * FROM Reddit_Backend ORDER BY id DESC LIMIT 1;`, (err, rows) => {
                if (err) {
                    console.log(err.toString());
                    res.status(500);
                    return;
                }
                res.status(200).json(rows);
            })
        });
});

app.put('/posts/:id', (req, res) => {
    con.query(`UPDATE Reddit_Backend
        SET title = ${req.body.title}
        WHERE id = ${req.params.id};`, (err) => {
            if (err) {
                console.log(err.toString());
                res.status(500);
                return;
            }
            console.log('Modified Matrix');
            con.query(`SELECT * FROM Reddit_Backend 
            WHERE id = ${req.params.id};`, (err, rows) => {
                    if (err) {
                        console.log(err.toString());
                        res.status(500);
                        return;
                    }
                    res.status(200).json(rows);
                })
        });
});

//   app.delete()

app.listen(PORT, () => {
    console.log(`Yo my n*gga I'm listenin' on ${PORT}. Wazzup dog ?`);
});