'use strict';
const planetData = [
    {
        category: 'inhabited',
        content: 'Foxes',
        asteroid: true,
    },
    {
        category: 'inhabited',
        content: 'Whales and Rabbits',
        asteroid: true,
    },
    {
        category: 'uninhabited',
        content: 'Baobabs and Roses',
        asteroid: true,
    },
    {
        category: 'inhabited',
        content: 'Giant monsters',
        asteroid: false,
    },
    {
        category: 'inhabited',
        content: 'Sheep',
        asteroid: true,
    },
];

/*
Remove the king from the list.
Fill the list based on the following list of objects.
Only add the asteroids to the list.
Each list item should have its category as a class and its content as text content.
*/

document.querySelector('ul').removeChild(document.querySelector('li'))

for (let i = 0; i < planetData.length; i++) {
    if (planetData[i].asteroid === true) {
        let list = document.createElement('li');
        let category = (planetData[i].category);
        list.appendChild(document.createTextNode(planetData[i].content));
        list.classList.add(category);
        document.querySelector('ul').appendChild(list);
    }
};