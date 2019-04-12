'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx: any = canvas.getContext('2d');
export{}

function brokkoli(bevitel:number):void{
if(bevitel<=1){

}
    ctx.beginPath();
    ctx.moveTo(10-1,10-1);
    ctx.lineTo(790-1,10-1);
    ctx.lineTo(400,790-1);
    ctx.lineTo(10-1,10-1);
    ctx.strokeStyle = 'black';
    ctx.stroke();
brokkoli(bevitel-1)

};
brokkoli(2)