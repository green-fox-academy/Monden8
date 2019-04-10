'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx:any = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a red horizontal line to the canvas' middle.
// draw a green vertical line to the canvas' middle.

ctx.beginPath();
ctx.moveTo(300,300);
ctx.lineTo(400,400);
ctx.strokeStyle = "red";   
ctx.lineWidth=8;
ctx.stroke();

// draw a box that has different colored lines on each edge.

ctx.beginPath();
ctx.moveTo(300,300);
ctx.lineTo(300,400);
ctx.strokeStyle="yellow";
ctx.lineWidth=1;
ctx.stroke();
ctx.beginPath();
ctx.moveTo(300,400);
ctx.lineTo(400,400);
ctx.strokeStyle="blue";
ctx.lineWidth=1;
ctx.stroke();
ctx.beginPath();
ctx.moveTo(400,400);
ctx.lineTo(400,300);
ctx.strokeStyle="green";
ctx.lineWidth=1;
ctx.stroke();
ctx.beginPath();
ctx.moveTo(400,300);
ctx.lineTo(300,300);
ctx.strokeStyle="black";
ctx.lineWidth=1;
ctx.stroke();

// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.

ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(800,800);
ctx.strokeStyle="purple";
ctx.lineWidth=4;
ctx.stroke();
ctx.beginPath();
ctx.moveTo(800,0);
ctx.lineTo(0,800);
ctx.strokeStyle="mistyrose";
ctx.lineWidth=4;
ctx.stroke();


