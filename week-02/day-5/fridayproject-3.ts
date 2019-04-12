'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx: any = canvas.getContext('2d');
//850-600
export{}
function draw(startX: number, startY: number, bLength: number, angle: number, branchWidth: number) {
    ctx.beginPath();
    ctx.save();
    
    ctx.strokeStyle = "#874312";
    ctx.lineWidth = branchWidth;
    ctx.translate(startX, startY);
    ctx.rotate(angle * Math.PI / 180);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -bLength);
    ctx.stroke();

    if (bLength < 5) {
        ctx.restore();
        ctx.fillStyle = "lawngreen";
        ctx.arc(0, -bLength, 2, 0, Math.PI / 2);
        ctx.fill();
        return;
    }
    draw(0, -bLength, bLength * 0.8, -30, branchWidth * 0.75);
    draw(0, -bLength, bLength * 0.8, 30, branchWidth * 0.75);

    ctx.restore();
}


draw(425, 600, 130, 0, 25);


