'use strict';

const exp = require('express');
const app = exp();
const PORT = 3000;
const path = require('path');

app.use(exp.json());


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/login.html')
})
app.post('/login',(req,res)=>{
console.log(req);
});

app.listen(PORT, () => {
    console.log(`Yo my n*gga I'm listenin' on ${PORT}. Wazzup dog ?`);
});