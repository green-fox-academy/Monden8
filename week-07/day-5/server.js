'use strict';

require('dotenv').config();

const express = require('express');
const sql = require('mysql');
const app = express();
const PORT = 3000;

app.use('PORT',PORT);
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
    console.log(`Connected to the Matrix :smile`);
  });

  app.get()
  app.post()
  app.put()
  app.delete()

app.listen(3000, () => {
    console.log(`Yo my n*gga I'm listenin' on ${PORT}. Wazzup dog ?`);
  });