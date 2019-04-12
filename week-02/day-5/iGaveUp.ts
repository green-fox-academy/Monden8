'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx: any = canvas.getContext('2d');
export{}

function drawYesterday(x:number,y:number,num:number) {
    if(num<=1){
        return
    }
    ctx.beginPath();
    ctx.strokeStyle = "black"
    ctx.moveTo(x/3, y/y)
    ctx.lineTo(x/3, y)
    ctx.stroke();//first line
    ctx.beginPath();
    ctx.strokeStyle = "black"
    ctx.moveTo(x/1.5, y/y)
    ctx.lineTo(x/1.5, y)
    ctx.stroke();//second line
    ctx.beginPath();
    ctx.strokeStyle = "black"
    ctx.moveTo(x/x, y/3)
    ctx.lineTo(x, y/3)
    ctx.stroke();//third line
    ctx.beginPath();
    ctx.strokeStyle = "black"
    ctx.moveTo(x/x, y/1.5)
    ctx.lineTo(x, y/1.5)
    ctx.stroke();//fourth line

    drawYesterday(x/3,y/3,num-1)
}

drawYesterday(900,900,5)

