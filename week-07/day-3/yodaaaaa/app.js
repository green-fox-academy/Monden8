'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.set('port', 3000);

app.post('/sith', (req, res) => {
    let sentence = req.body.text;
    let stringArray = [];
    let sithSentence = '';
    let randomArray = ['Err', 'Arrgh', 'Uhmm'];
    if (sentence !== undefined) {
        stringArray = sentence.split(' ')
        //if(stringArray.length%2===0){
        for (let i = 1; i < stringArray.length; i += 2) {
            sithSentence = sithSentence.concat(' ', stringArray[i])
            i--
            sithSentence = sithSentence.concat(' ', stringArray[i])
            i++
        }
        //}else {

        //}        
        res.send({
            "sith_text": sithSentence
        })
    } else {
        res.send({
            "error": "Feed me some text you have to, padawan young you are. Hmmm."
        })
    }
});
app.listen(3000, function () {
    console.log(`Yo my n*nja I'm listenin' on port 3000`);
});