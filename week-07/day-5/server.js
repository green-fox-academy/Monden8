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
            res.status(500).send();
            return;
        }
        console.log('Dowloaded Matrix');
        res.status(200).json(rows);
    });
});

app.post('/posts', (req, res) => {
    con.query(`INSERT INTO Reddit_Backend(title,url) 
    VALUES(?,?);`, [req.body.title, req.body.url], (err) => {
            if (err) {
                console.log(err.toString());
                res.status(500).send();
                return;
            }
            console.log('Updated Matrix');
            con.query(`SELECT * FROM Reddit_Backend ORDER BY id DESC LIMIT 1;`, (err, rows) => {
                if (err) {
                    console.log(err.toString());
                    res.status(500).send();
                    return;
                }
                res.status(200).json(rows);
            })
        });
});

app.put('/posts/:id', (req, res) => {
    con.query(`UPDATE Reddit_Backend
        SET title = ?,
        WHERE id = ?;`[req.body.title, req.params.id], (err) => {
            if (err) {
                console.log(err.toString());
                res.status(500).send();
                return;
            }
            console.log('Modified Matrix');
            con.query(`SELECT * FROM Reddit_Backend 
            WHERE id = ?;`[req.params.id], (err, rows) => {
                    if (err) {
                        console.log(err.toString());
                        res.status(500).send();
                        return;
                    }
                    res.status(200).json(rows);
                })
        });
});

app.delete('/posts/:id', (req, res) => {
    let deletedData;
    con.query(`SELECT * FROM Reddit_Backend 
            WHERE id = ?;`[req.params.id], (err, rows) => {
            if (err) {
                console.log(err.toString());
                res.status(500).send();
                return;
            }
            deletedData = rows;
            con.query(`DELETE FROM Reddit_Backend
            WHERE id = ?;`[req.params.id], (err) => {
                    if (err) {
                        console.log(err.toString());
                        res.status(500).send();
                        return;
                    }
                    res.status(200).json(deletedData);
                });
        });
});

//variables
let doesUPcontain;
let contain = function (upID) {
    (con.query(`SELECT up_posts FROM Logged_User`, (err, rows) => {
        if (err) {
            console.log(err.toString());
            res.status(500).send();
            return;
        } doesUPcontain = rows;
    }));
};
let doesDOWNcontain;
(con.query(`SELECT down_posts FROM Logged_User`, (err, rows) => {
    if (err) {
        console.log(err.toString());
        res.status(500).send();
        return;
    } doesDOWNcontain = rows;
}));
let postDOTid;
(con.query(`SELECT id FROM Reddit_Backend`, (err, rows) => {
    if (err) {
        console.log(err.toString());
        res.status(500).send();
        return;
    } postDOTid = rows;
}));

//counting variables
let upVotes;
(con.query(`SELECT upname_id FROM Reddit_Backend WHERE id = `/*FUNCTION*/, (err, rows) => {
    if (err) {
        console.log(err.toString());
        res.status(500).send();
        return;
    } upVotes = rows.split(',').length;
}));
let downVotes;
(con.query(`SELECT downName_id FROM Reddit_Backend WHERE id = `/*FUNCTION*/, (err, rows) => {
    if (err) {
        console.log(err.toString());
        res.status(500).send();
        return;
    } downVotes = rows.split(',').length;
}));

//upvote method
app.post('/posts/:id/upvote', (req, res) => {
    if (doesUPcontain !== postDOTid) {
        con.query(`UPDATE Reddit_Backend
        SET score = "${upVotes - downVotes}"
        WHERE id = ?;`[req.params.id], (err) => {
                if (err) {
                    console.log(err.toString());
                    res.status(500).send();
                    return;
                } else {
                    res.status.status(200).json();
                }
            }
        )
    };
    console.log('User already upvoted this post');
    res.status(405).json();
});
//downvote method
app.post('/posts/:id/downvote', (req, res) => {
    if (doesDOWNcontain !== postDOTid) {
        con.query(`UPDATE Reddit_Backend
        SET score = "${upVotes - downVotes}"
        WHERE id = ?;`[req.params.id], (err) => {
                if (err) {
                    console.log(err.toString());
                    res.status(500).send();
                    return;
                } else {
                    res.status.status(200).json();
                }
            }
        )
    };
    console.log('User already upvoted this post');
    res.status(405).json();
});

app.listen(PORT, () => {
    console.log(`Yo my n*gga I'm listenin' on ${PORT}. Wazzup dog ?`);
});