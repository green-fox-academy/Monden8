'use strict';
/*
    1, Build up the necessary structure with JavaScript (try to use semantically correct elements)
    2, Achive the same design by css
    3, Try not to use css classes
    4, Add some functionality to the buttons
        - If "Up" is clicked the selection should move up by one
        - If "Down" is clicked the selection should move down by one
        - If "X" is clicked the selected item should be removed and the first item should be selected
        - If ">" is clicked the selected item should be moved to the right side and the first item on the left side should be selected
    5, Check all the edge cases, no error should be printed to the console
*/

//Main
let mainDiv = document.createElement('div');
mainDiv.classList.add('mainDiv');
document.body.appendChild(mainDiv);

//Buttons
let buttonIcons = ['Up', '>', 'X', 'Down'];
//let buttonFunction=['upSelect()','putIn()','putOut()','selectDown()']
for (let i = 0; i < 4; i++) {
    let buttons = document.createElement('button');
    buttons.innerText = buttonIcons[i];
    //buttons.onClick=buttonFunction[i]
    buttons.classList.add('clickable');
    mainDiv.appendChild(buttons);
}
let listItems = ['bread', 'milk', 'orange', 'tomato'];