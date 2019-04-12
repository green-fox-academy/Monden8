'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx: any = canvas.getContext('2d');
export{}
//600,470


/* function sierpinski(Ax:number,Ay:number,Bx:number,By:number,Cx:number,Cy:number,d:number,ctx:number) {
    if(d>0) {
        sierpinski(Ax,Ay,(Ax + Cx) / 2,(Ay + Cy) / 2,(Ax + Bx) / 2,(Ay + By) / 2,d-1,ctx);
        sierpinski((Ax + Bx) / 2,(Ay + By) / 2,(Bx + Cx) / 2,(By + Cy) / 2,Bx,By,d-1,ctx);
        sierpinski((Ax + Cx) / 2,(Ay + Cy) / 2,(Bx + Cx) / 2,(By + Cy) / 2,Cx,Cy,d-1,ctx);
    }
    else {
        ctx.moveTo(Ax,Ay);
        ctx.lineTo(Bx,By);
        ctx.lineTo(Cx,Cy);
        ctx.lineTo(Ax,Ay);
    }
}
 
sierpinski(50,365.47,450,365.47,250,19.06,4,ctx);
ctx.fillStyle = 'white';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.stroke(); */


