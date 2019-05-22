'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.set('port', 3000);

app.post('/arrays', (req, res) => {
    let whatTo = req.body.what
    let numberIT = req.body.numbers
    let result = 0;
    let resultArray = [];
    if (whatTo === "sum") {
        for (let i = 0; i < numberIT.length; i++) {
            result += numberIT[i]
        }
    } else if (whatTo === "multiply") {
        result = 1;
        for (let i = 0; i < numberIT.length; i++) {
            result *= numberIT[i]
        }
    } else if (whatTo === "double") {
        for (let i = 0; i < numberIT.length; i++) {
            resultArray.push(numberIT[i] * 2)
        }
    }
    if (result == 0) {
        res.send({
            resultArray
        })
    } else {
        res.send({
            result
        })
    }
});

app.listen(3000, function () {
    console.log(`Yo, yo my n*nja I'm listenin' on port 3000`);
});