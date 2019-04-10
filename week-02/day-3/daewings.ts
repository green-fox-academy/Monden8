'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx: any = canvas.getContext('2d');


// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.



function lineDrawing(x: number, y: number) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(400, 400);
    ctx.strokeStyle = "purple";
    ctx.lineWidth = 4;
    ctx.stroke();
};

/*lineDrawing(30,30)
lineDrawing(430,430)
lineDrawing(30,120)*/

// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.

function lineDrawingy(x: number, y: number) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 50, y);
    ctx.strokeStyle = "purple";
    ctx.lineWidth = 4;
    ctx.stroke();
};

/*lineDrawingy(30,40)
lineDrawingy(50,60)
lineDrawingy(40,50)*/

// Draw a green 10x10 square to the center of the canvas.

ctx.beginPath();
ctx.fillStyle = 'green';
ctx.fillRect(395, 395, 10, 10);

// Draw four different size and color rectangles.
// Avoid code duplication.

function drawafuckingrectangle(x: number, y: number, width: number, height: number, color: string) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}
let kezdo: number = 50;
let vegzo: number = 20;
let colorarray: string[] = ["purple", "green", "red", "brown"]
/*for(let i:number=0;i<4;i++){
    drawafuckingrectangle(vegzo+(100*i),vegzo+(100*i),kezdo+(10*i),kezdo+(10*i),colorarray[0+i])
}*/

// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawafuckingrectangleffs(x: number, y: number) {
    ctx.fillStyle = "yellow";
    ctx.fillRect(x, y, 50, 50);
}
/*for(let i:number=0;i<600;i+=200){
    drawafuckingrectangleffs(40+i,30+i);
};*/


// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

/*
function drawafuckingrectanglegoddamnit(x:number,y:number,width:number,height:number,color:string){
    ctx.fillStyle = color;
    ctx.fillRect(x,y,width,height);
};
function userinput(x:number){
    return x;
};

let kanna:number =300;


for(let i:number=-3;i<0;i++){
    let colorarrayforthewin:string[]=["purple","green","red","brown"]
    drawafuckingrectanglegoddamnit(400-((userinput(kanna)-(10*i))/2),400-((userinput(kanna)-(10*i))/2),userinput(kanna)-(10*i),userinput(kanna)-(10*i),colorarrayforthewin[3+i])
};
*/
function namostujra(meret: number) {
    let colorarrayforthewin: string[] = ["purple", "green", "red", "brown","ghostwhite","lightskyblue","lightcyan","palegreen"]
    for (let i: number = 0; i < colorarrayforthewin.length; i++) {
        let color: string = colorarrayforthewin[i]
        ctx.fillStyle = color;
        ctx.beginPath();
        let center: number = 400-(meret/2);
        ctx.fillRect(center, center, meret, meret)
        center-=400+(meret/2)
        meret-=50
    }
};
namostujra(600)

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.