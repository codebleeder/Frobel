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

        square: {
            top: 80,
            left: 50,
            width: 40,
            height: 40,
            fill: 'rgb(239, 157, 249)'
        },

        triangle: {
            top: 140,
            left: 50,
            width: 40,
            height: 34.6410161514,
            fill: '#fe5d26',            
        },

        right_triangle: {
            top: 210,
            left: 60,
            width: 56.5685424949,
            height: 28.284271245,
            fill: '#fe5d26',
            angle: 135
        },

        circle: {
            top: 240,
            left: 50,
            radius: 25,
            fill: '#f2c078'
        },

        semi_circle: {
            top: 240,
            left: 50,
            radius: 25,
            fill: '#f2c078',
            endAngle: Math.PI
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

        square: {
            top: 80,
            left: 50,
            width: 40,
            height: 40,
            fill: 'rgb(239, 157, 249)',
            hasBorders: false,
            hasControls: false 
        },

        triangle: {
            top: 140,
            left: 50,
            width: 40,
            height: 34.6410161514,
            fill: '#fe5d26',
            hasBorders: false,
            hasControls: false
        },

        right_triangle: {
            top: 210,
            left: 60,
            width: 56.5685424949,
            height: 28.284271245,
            fill: '#fe5d26',
            hasBorders: false,
            hasControls: false,
            angle: 135
        },

        circle: {
            top: 240,
            left: 50,
            radius: 25,
            fill: '#f2c078',
            hasBorders: false,
            hasControls: false
        },

        semi_circle: {
            top: 300,
            left: 50,
            radius: 25,
            fill: '#f2c078',
            startAngle: 0,
            endAngle: Math.PI,
            hasBorders: false,
            hasControls: false
        },
    };
    
    function add_shape(shape, top) {
        if (shape === 'rect' && top === shapes_side.rect.top) {
            var rect_main = new fabric.Rect(shapes_main.rect);
            canvas_main.add(rect_main);
        }

        if (shape === 'rect' && top === shapes_side.square.top) {
            var square_main = new fabric.Rect(shapes_main.square);
            canvas_main.add(square_main);
        }

        if (shape == 'triangle' && top==shapes_side.triangle.top) {
            var triangle_main = new fabric.Triangle(shapes_main.triangle);
            canvas_main.add(triangle_main);
        }

        if (shape == 'triangle' && top == shapes_side.right_triangle.top) {
            var right_triangle_main = new fabric.Triangle(shapes_main.right_triangle);
            canvas_main.add(right_triangle_main);
        }


        if (shape == 'circle' && top === shapes_side.circle.top) {
            var circle_main = new fabric.Circle(shapes_main.circle);
            canvas_main.add(circle_main);
        }

        if (shape == 'circle' && top === shapes_side.semi_circle.top) {
            var semi_circle_main = new fabric.Circle(shapes_main.semi_circle);
            canvas_main.add(semi_circle_main);
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
        add_shape(shape_type, opt.target.top, opt.target.left);
    });

    var rect_side = new fabric.Rect(shapes_side.rect);
    var triangle_side = new fabric.Triangle(shapes_side.triangle);
    canvas_side.add(rect_side);
    canvas_side.add(triangle_side);
    var circle_side = new fabric.Circle(shapes_side.circle);
    canvas_side.add(circle_side);
    var square_side = new fabric.Rect(shapes_side.square);
    canvas_side.add(square_side);
    var right_triangle_side = new fabric.Triangle(shapes_side.right_triangle);
    canvas_side.add(right_triangle_side);
    var semi_circle_side = new fabric.Circle(shapes_side.semi_circle);
    canvas_side.add(semi_circle_side);
}

$(document).ready(function () {
    function setTextColor(picker) {
        document.getElementsByTagName('body')[0].style.color = '#' + picker.toString()
    }

   
});