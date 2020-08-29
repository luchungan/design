class Site{
    name():void{
        console.log('runny')
    }
}
var obj = new Site()
obj.name()
let num: Number = 1;
let name1: string = "lily"

let flag: boolean = false
let arr :number[] = [1,2,3];
let arr1:Array<string> = ["1","2","3"] 

let x:[string , number];
x = ["1",2]

enum color{Red,green,blue}

let c:color = color.Red
console.log(c)

function hello():void{
    console.log('123')
}

let y:number |null |undefined
y = 1
y = null
y = undefined

let x1 :never;
let y1 : number

//x = 123 //赋值失败

x1 = (()=>{throw new Error('expection')})()
y1 = (()=>{throw new Error('expection')})()

function error(message:string):never{
    throw new Error(message)
}

function loop():never{
    while(true){
        
    }
}


