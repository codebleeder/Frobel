// EaselJS code
function init() {
    canvas_main();
    canvas_side();
}
function canvas_main() {
    //var canvas = new fabric.Canvas('canvas-main');
}

function canvas_side() {
    // fabric
    var canvas_side = new fabric.Canvas('canvas-side');
    var canvas_main = new fabric.Canvas('canvas-main');
    var positions = {
        rect: {top: 30, left: 50}
    }

    function add_rect() {

    }

    function add_new_shape(top, left){
        for (var shape in positions) {
            console.log(shape);
            if (shape.top === top && shape.left === left) {
                
            }
        }
    }
    var rect = new fabric.Rect({
        top: 30,
        left: 50,
        width: 70,
        height: 40,
        fill: 'rgb(239, 157, 249)',
        //selectable: false,
        //lockMovementX: true,
        //lockMovementY: true 
        hasBorders: false, 
        hasControls: false, 
    });
    fabric.Object.prototype.transparentCorners = true; 
    

    canvas_side.on('mouse:over', function (e) {
        rect.set('fill', 'red');
        canvas_side.renderAll();
    });

    canvas_side.on('object:selected', function () {
        console.log('object selected');
    });
    canvas_side.on('mouse:out', function (e) {
        rect.set('fill', 'green');
        canvas_side.renderAll();
    });
    canvas_side.hoverCursor = 'crosshair';

    //function log(eventName) {
    //    console.log(eventName);
    //}

    //function observe(eventName) {
    //    //logObservingEvent(eventName);
    //    canvas.on(eventName, function (opt) {
    //        log(eventName, 1, opt);
            
    //    });        
    //}

    //observe('object:selected');

    canvas_side.on('object:selected', function (opt) {
        console.log(opt);
        add_new_shape(opt.target.top, opt.target.left);
    });
    canvas_side.add(rect);
}

$(document).ready(function () {
    function setTextColor(picker) {
        document.getElementsByTagName('body')[0].style.color = '#' + picker.toString()
    }

   
});