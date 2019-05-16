const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
/*app.get('/:givenName', (req, res) => {
    // render `home.ejs`
    if (req.params.givenName == undefined) {
        res.render('home', {
            title: 'Welcome back, Guest!',
        });
    } else {
        res.render('home', {
            title: 'Welcome back, ' + req.params.givenName + '!',
        })
    };
});*/


app.get('/', (req, res) => {
    // render `home.ejs`
    if (req.query.givenName == undefined) {
        res.render('home', {
            title: 'Welcome back, Guest!',
        });
    } else {
        res.render('home', {
            title: 'Welcome back, ' + req.query.givenName + '!',
        })
    };
});

// start express app on port 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});