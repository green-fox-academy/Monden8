// <!-- You can work in the html or in a separate js file. Like:
//     <script>
//       On the click of the button,
//       Count the items in the list
//       And display the result in the result element.
//     </script>
//     OR
//     <script src="events-2.js"></script> -->

const button = document.querySelector('button');

let result = 0;
for (let i = 0; i < document.querySelectorAll('li').length; i++) {
    result++
};
button.addEventListener('click', () => {
    document.querySelector('p').innerHTML = result;
});
