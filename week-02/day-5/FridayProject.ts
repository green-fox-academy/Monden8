'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx: any = canvas.getContext('2d');

export{}
//800.800

function drawPyr(elso: number, masodik: number): void {
    if (elso<=5) {
    ctx.beginPath();
    ctx.moveTo(elso, elso);
    ctx.lineTo(masodik, elso);
    ctx.lineTo(elso+masodik/ 2, masodik);
    ctx.lineTo(elso, elso);
    ctx.strokeStyle = 'black';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(elso+masodik/ 2, elso);
    ctx.lineTo(masodik,masodik );
    ctx.lineTo(elso,masodik );
    ctx.lineTo(elso+masodik/ 2, elso);
    ctx.strokeStyle = 'darkpink';
    ctx.stroke();
    drawPyr(elso/2,masodik/2)
    }
    ctx.beginPath();
    ctx.moveTo(elso, elso);
    ctx.lineTo(masodik, elso);
    ctx.lineTo(elso+masodik/ 2, masodik);
    ctx.lineTo(elso, elso);
    ctx.strokeStyle = 'black';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(elso+masodik/ 2, elso);
    ctx.lineTo(masodik,masodik );
    ctx.lineTo(elso,masodik );
    ctx.lineTo(elso+masodik/ 2, elso);
    ctx.strokeStyle = 'darkpink';
    ctx.stroke();
    drawPyr(elso+1.2,masodik+1.2)
    
}
drawPyr(20, 780);




