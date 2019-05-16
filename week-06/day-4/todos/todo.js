const express = require('express');
const app = express();
const PORT = 3000;
const todos = [
    'get up',
    'survive',
    'go back to bed',
];

app.set('view engine', 'ejs');
for (let i = 0; i < todos.length; i++) {
    content = todos[i];

    app.get('/', (req, res) => {
        res.render('home', {
            title: 'List to Do',
            content: ''
            /*
            let element = document.createElement('ul')
            element.innerHTML = `<li></li>
             ${Array(5).join(0).split(0).map((item, i) => `
              <div>I am item number ${i}.</div>`).join('')}`
            */
        }
});


    // start express app on port 3000
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });