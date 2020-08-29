/// <reference path = "IShape.ts" />

namespace Drawing{
    export class Triangle implements IShape{
        draw(){
            console.log('i am triangle')
        }
    }
}