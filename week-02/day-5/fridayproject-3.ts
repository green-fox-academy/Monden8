'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx: any = canvas.getContext('2d');

function draw(startX:number, startY:number, len:number, angle:number,branchWidth:number) {
    ctx.beginPath();
    ctx.save();
    ctx.lineWidth = branchWidth;
    ctx.translate(startX, startY);
    ctx.rotate(angle * Math.PI/180);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -len);
    ctx.stroke();
    
    if(len < 5) {
      ctx.restore();
      return;
    }
    
    draw(0, -len, len*0.8, -35,branchWidth*0.75);
    draw(0, -len, len*0.8, 35,branchWidth*0.75);
    
    ctx.restore();
  }
  
  
  draw(400,800,120,0,25);


