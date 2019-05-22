'use strict';
const express = require('express');
const path = require('path');
const app = express();
app.use('/assets',express.static('assets'));
app.set('port', 3000);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
app.listen(3000,function(){
    console.log(`Yo, yo, yo my n*nja I'm listenin' on port 3000`);
});