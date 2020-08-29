interface Person {
    firstName:string,
    lastName:string,
    sayHi:()=>string
}

let customer :Person={
    firstName:"Tom",
    lastName: 'json',
    sayHi:()=>"hello"
}

console.log(customer.firstName,customer.lastName,customer.sayHi()) 

// 联合类型接口
interface RunOption{
    program:string,
    commandLine:Array<string>|string|(()=>string)
}


//类型断言
function func(val:string|number):number{
    if((<string>val).length){
        return (<string>val).length
    }else{
        return val.toString().length
    }
}
/**
 * else
 */
function func1(val:string|number):number{
    if((val as string).length){
        return (val as string).length
    }else{
        return val.toString().length
    }
}


var options: RunOption = {program:"lucg",commandLine:"lily"}
options = {program:"lily",commandLine:["lucy"]}
options = {program:"lily",commandLine:()=>"lily"}

//接口和数组  接口中我们可以将数组的索引值和元素设置为不同类型，索引值可以是数字或字符串。
interface namelist{
    [index:number]:string
}
let uname1 : namelist=['lucy','lily',"3"]


interface namelist2{
    [index:string]:number
}
let uname2: namelist2;
// uname2["age"]=12
// uname2["score"]=98
// console.log(uname2)
// 泛型约束


function pluck<T, K extends keyof T>(o:T, names: K[]):T[K][]{
    return names.map(n=>o[n]);
}

interface Person1{
    name:string,
    age:number
}

let person1:Person1 = {
    name:'lucy',
    age:23
}

let uname:string[] = pluck(person1,["name"])

//接口继承
interface Person3{
    age:number
}
interface Musician extends Person3{
    instrument:string
}

let musician1: Musician ={
    instrument:"erhu",
    age:18
}

let musician2 = <Musician>{} //类型断言
musician2.age = 24
musician2.instrument = "paino"

console.log(musician2)

//多类继承
interface IParent1{
    v1:number
}
interface IParent2{
    v2:number
}
interface Child extends IParent1,IParent2{}
var Iobj:Child = {v1:12,v2:13}


export{}