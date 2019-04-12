'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx: any = canvas.getContext('2d');


function sierPinskyCarpet(startX: number, startY: number, startSize: number) {
    ctx.beginPath();
    ctx.save();

    ctx.fillStyle = "azalapafekete?";
    ctx.translate(startX, startY);
    ctx.fillRect(-startSize, -startSize, startSize, startSize);
    ctx.fillRect(+startSize, -startSize, startSize, startSize);
    ctx.fillRect(+startSize, +startSize, startSize, startSize);
    ctx.fillRect(-startSize, +startSize, startSize, startSize);

    //ctx.rotate(45 * Math.PI / 180)
    if (startSize < 80) {
        ctx.restore();
        return;
    }


    ctx.restore();
    ctx.translate(startSize, startSize);
    sierPinskyCarpet(startX, startY, startSize * 0.5);

    
    

}
sierPinskyCarpet(298, 298, 202)

