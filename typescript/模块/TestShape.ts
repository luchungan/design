import {IShape} from './IShape'
import {Circle} from './Circle'
import {Triangle} from './Triangle'

function drawAllShape(shape:IShape){
    shape.draw()
}

drawAllShape(new Circle())
drawAllShape(new Triangle())

