'use strict';

const exp = require('express');
const PORT = 6969;
const app = exp();
const eskweel = require('mysql');
const path = require('path');
require('dotenv').config();


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

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
  });













  app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT} 🔥`);
  });