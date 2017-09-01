// EaselJS code
function init() {
    canvas_main();
    canvas_side();
}
function canvas_main() { }

function canvas_side() {
    var canvas = document.getElementById('canvas-side');
    var context = canvas.getContext('2d');
    var vFillStyle = 'rgb(239, 157, 249)';

    // rectangle
    context.fillStyle = vFillStyle;
    context.fillRect(15, 10, 70, 40);

    // square
    context.fillStyle = vFillStyle;
    context.fillRect(30, 60, 40, 40);

    // equilateral triangle 
    context.beginPath();
    context.moveTo(30, 150);
    context.lineTo(70, 150);
    context.lineTo(50, 150.0 - 34.641);
    context.fill();

    // right triangle
    context.beginPath();
    context.moveTo(15, 160);
    context.lineTo(70+15, 160);
    context.lineTo(15, 160+40);
    context.fill();

    // circle
    context.beginPath();    
    context.arc(50, 250, 40, 0, Math.PI * 2);
    context.fill();

    // semi circle
    context.beginPath();
    context.arc(50, 320, 40, 0, Math.PI);
    context.fill();

    // fabric
    var canvas = new fabric.Canvas('canvas-side');

}

$(document).ready(function () {
    function setTextColor(picker) {
        document.getElementsByTagName('body')[0].style.color = '#' + picker.toString()
    }
});