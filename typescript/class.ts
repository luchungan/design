class Person{

}

class Car{
    engine:string
    constructor(engine:string){
        this.engine = engine
    }
    disp():void{
        console.log("发动机："+this.engine)
    }
}
var obj = new Car('engine 1')
obj.disp()

// 类的继承
class Shape{
    Area:number
    constructor(a:number){
        this.Area = a
    }

}

class Circle extends Shape{
    disp():void{
        console.log("圆的面积"+this.Area)
    }
}
let obj1 = new Circle(60)

obj1.disp()

//不支持继承多个类，但支持多重继承
class Root{
    Name:string
    constructor(name:string) {
        this.Name = name
    }
}
class Child extends Root{}
class ChildChild extends Child{}

let child = new ChildChild('lucy')

//继承类方法重写
class PrintClass{
    print():void{
        console.log('父类调用print方法')
    }
}
class StringPrint extends PrintClass{
    print():void{
        super.print()
        console.log('子类调用print方法')
    }
}
let strp = new StringPrint()
strp.print()

//static关键字
class StaticMenu{
    static num:number
    static disp():void{
        console.log("num值为:"+StaticMenu.num)
    }

}
StaticMenu.num = 12
StaticMenu.disp()

//instanceof运算符
class Person4{}
var p4 = new Person4()
console.log(p4 instanceof Person4)

/**
 * private
 */
class Person5{
    name:string="lucy";
    private age:number=12
}
let p5 = new Person5()
console.log(p5.name) //访问age会报错

//implements 

interface ILoan{
    interest:number
}
class ILoan1 implements ILoan{ //implement用在类上相当于接口，必须实现inserest
    interest: number
    rebeat:number
    constructor(a:number,b:number){
        this.interest = a;
        this.rebeat = b
    }
}
var obj2 = new ILoan1(10,1)
console.log(obj2.interest)
export {}