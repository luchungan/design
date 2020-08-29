/// <reference path="IShape.ts" />
/// <reference path="Circle.ts" />
/// <reference path="Triangle.ts" />

function drawAllShape(shape:Drawing.IShape){
    shape.draw()
}

drawAllShape(new Drawing.Circle())
drawAllShape(new Drawing.Triangle())

export{}