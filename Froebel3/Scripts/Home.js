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
    var shapes_main = {
        rect: {
            top: 30,
            left: 50,
            width: 70,
            height: 40,
            fill: 'rgb(239, 157, 249)'
        },

        triangle: {
            top: 100,
            left: 50,
            width: 70,
            height: 40,
            fill: '#fe5d26',            
        },

        circle: {
            top: 170,
            left: 50,
            radius: 25,
            fill: '#f2c078'
        }
    };

    var shapes_side = {
        rect: {
            top: 30,
            left: 50,
            width: 70,
            height: 40,
            fill: 'rgb(239, 157, 249)',            
            hasBorders: false,
            hasControls: false
        },

        triangle: {
            top: 100,
            left: 50,
            width: 70,
            height: 40,
            fill: '#fe5d26',
            hasBorders: false,
            hasControls: false
        },

        circle: {
            top: 170,
            left: 50,
            radius: 25,
            fill: '#f2c078',
            hasBorders: false,
            hasControls: false
        }
    };
    
    function add_shape(shape) {
        if (shape === 'rect') {
            var rect_main = new fabric.Rect(shapes_main.rect);
            canvas_main.add(rect_main);
        }

        if (shape == 'triangle') {
            var triangle_main = new fabric.Triangle(shapes_main.triangle);
            canvas_main.add(triangle_main);
        }

        if (shape == 'circle') {
            var circle_main = new fabric.Circle(shapes_main.circle);
            canvas_main.add(circle_main);
        }
    }
    
    
    fabric.Object.prototype.transparentCorners = true; 
    

    canvas_side.on('mouse:over', function (e) {
        rect_side.set('fill', 'red');
        canvas_side.renderAll();
    });

    canvas_side.on('object:selected', function () {
        console.log('object selected');
    });
    canvas_side.on('mouse:out', function (e) {
        rect_side.set('fill', 'green');
        canvas_side.renderAll();
    });
    canvas_side.hoverCursor = 'crosshair';

    

    canvas_side.on('object:selected', function (opt) {        
        var shape_type = opt.target.get('type');
        add_shape(shape_type);
    });

    var rect_side = new fabric.Rect(shapes_side.rect);
    var triangle_side = new fabric.Triangle(shapes_side.triangle);
    canvas_side.add(rect_side);
    canvas_side.add(triangle_side);
    var circle_side = new fabric.Circle(shapes_side.circle);
    canvas_side.add(circle_side);
}

$(document).ready(function () {
    function setTextColor(picker) {
        document.getElementsByTagName('body')[0].style.color = '#' + picker.toString()
    }

   
});