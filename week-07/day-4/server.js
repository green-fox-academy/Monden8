'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
require('dotenv').config();
const PORT = 3000;
const path = require('path');

app.use('/static',express.static('static'));
//app.use(express.static(path.join(__dirname, 'assests')));
app.use(express.json());

const conn = mysql.createConnection({
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

// app.post('/add', (req, res) => {
//   conn.query(
//     `INSERT INTO ${book_mast} (name, height) VALUES ("${req.body.name}", ${
//       req.body.height
//     });`,
//     (err, rows) => {
//       if (err) {
//         console.log(err.toString());
//         return;
//       }
//       console.log('data successfully added to database');
//       res.status(201).send(rows);
//     }
//   );
// });

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html')
});

app.get('/allBooks', (req, res) => {
  conn.query(`SELECT book_name FROM book_mast;`, (err, rows) => {
    if (err) {
      console.log(err.toString());
      return;
    }
    console.log('data successfully requested from DB');
    res.send(rows);
  });
});

app.get('/allInfo', (req, res) => {
  conn.query(`SELECT aut_name, book_name 
  FROM book_mast
  INNER JOIN author 
  ON book_mast.aut_id = author.aut_id;`, (err, rows) => {
    if (err) {
      console.log(err.toString());
      return;
    }
    console.log('data successfully requested from DB');
    res.send(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT} 🔥`);
});