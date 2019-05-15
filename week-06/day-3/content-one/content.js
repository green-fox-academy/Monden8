'use strict';
/*You can work in the html or in a separate js file. Like:
    <script>
    1)  Fill every paragraph with the last one's content.
    2)  Do the same again, but you should keep the cat strong.
    */
const allElement = document.querySelectorAll('p');
//for (let i = allElement.length - 1; i > 0; i--) {
//    allElement[i - 1].innerHTML += allElement[i].innerHTML;
//};
for (let i = 0; i < allElement.length-1; i++) {
    allElement[i].innerHTML += allElement[i+1].innerHTML
};