'use strict';
let firstList = document.getElementById('myList');
let secondList = document.getElementById('myOtherList');

let types = ["scifi", "drama", "comedy"];
let movies = {
    scifi: ["Moon", "2001: A Space Odyssey", "Contact"],
    drama: ["Darkest Hour", "There Will Be Blood", "American Beauty"],
    comedy: ["Airplane!", "Deadpool", "Wayne's World"]
};

function add_selected() {
    let optional = document.createElement('option');
    optional.setAttribute('disabled', 'true');
    optional.setAttribute('selected', 'true');
    optional.innerHTML = "Select your movie";
    secondList.appendChild(optional)
};

firstList.addEventListener(('change'), () => {
    while (secondList.childElementCount > 0) {
        secondList.removeChild(secondList.lastElementChild)
        document.querySelector('p').innerHTML = `The selected movie is: -`;
    }
    for (let i = 0; i < types.length; i++) {
        if (firstList.value == types[i]) {
            add_selected()
            for (let j = 0; j < movies[Object.keys(movies)[i]].length; j++) { //MAGIC NUMBER
                let movie = document.createElement('option');
                movie.setAttribute('value', `${movies[types[i]][j]}`);
                movie.innerHTML = movies[types[i]][j];
                secondList.appendChild(movie);
            }
        }
    }
});

function show_selected() {
    document.querySelector('p').innerHTML = `The selected movie is: ${secondList[secondList.selectedIndex].value}`;
};

secondList.addEventListener('change', show_selected);;