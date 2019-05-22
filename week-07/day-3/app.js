'use strict';
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/assets', express.static('assets'));
app.set('port', 3000);
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(3000, function () {
  console.log(`Yo, yo, yo my n*nja I'm listenin' on port 3000`);
});
//doubling
app.get('/doubling', (req, res) => {
  if (req.query.input == undefined) {
    res.send(JSON.stringify({
      "error": "Please provide an input!"
    }))
  } else {
    res.send(JSON.stringify({
      "received": req.query.input,
      "result": req.query.input * 2
    })
    )
  }
});
//greeter
app.get('/greeter', (req, res) => {
  if (req.query.name == undefined && req.query.title == undefined) {
    res.send({
      error: 'Please provide a name and title'
    });
  } else if (req.query.name == undefined) {
    res.send({
      error: 'Please provide a name'
    });
  } else if (req.query.title == undefined) {
    res.send({
      error: 'Please provide a title'
    });
  } else {
    res.send({
      "welcome_message": `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
    })
  }
});
//appendA
app.get('/appenda/:text?', (req, res) => {
  if (req.params.text === undefined) {
    res.send(JSON.stringify({
      "error": "Please provide an input!"
    }))
  } else {
    res.send(JSON.stringify({
      "appended": req.params.text + 'a'
    })
    )
  }
});
//doUntil
app.post('/dountil/:action', (req, res) => {

  //sum
  if (req.params.action === 'sum') {
    let sum = 0;
    for (let i = 0; i <= req.body.until; i++) {
      sum += i
    }
    res.send({
      "sum": sum
    })
  }
  else if (req.params.action === 'factor') {
    let factor = 1;
    for (let i = req.body.until; i >= 1; i--) {
      factor = factor * i
    }
    res.send({
      "factor": factor
    })
  };
});