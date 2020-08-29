/// <reference  path="IShape.ts" />

namespace Drawing{
    export class Circle implements IShape{
        draw(){
            console.log('i am Circle')
        }
    }
}