'use strict';


let pets = document.getElementsByName('pet');
for (let i = 0; i < pets.length; i++) {
    pets[i].addEventListener(('click'), () => {
        document.getElementById('isu').disabled = false;
    });
};

document.getElementById('Yes').addEventListener(('click'), () => {
    document.getElementById('ilc').disabled = false;
});
document.getElementById('No').addEventListener(('click'), () => {
    document.getElementById('ilc').disabled = true;
});

document.getElementById('ilc').addEventListener('click', () => {
    window.alert("Thank you, you've successfully signed up for cat facts");
});

document.getElementById('isu').addEventListener(('click'), () => {
    if (document.getElementById('Viktor').checked == true && document.getElementById('No').checked == true) {
        window.alert('Sigh, we still added you to the cat facts list');
    };
});