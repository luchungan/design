let person={
    name:"lucy",
    age:23,
    sayHi:():void=>{}
}
person.sayHi=function():string{ //编辑报错 对象中必须有sayHi的定义
    return "hello"
}

console.log(person.sayHi())


var sites={
    site1:'Runoob',
    site2:"Google"
}
var invokesites = function(obj:{site1:string,site2:string}):void{
    console.log(obj.site1)
    console.log(obj.site2)
}
invokesites(sites)

//实现一个多态
interface Ipoint1{
    x:number,
    y:number,
    z?:number
}


function addPoints(p1:Ipoint1,p2:Ipoint1):number{
        if(p1.z && p2.z){
            return p1.x * p2.x +p1.y*p2.y +p1.z*p2.z 
        }else{
            return p1.x * p2.x +p1.y*p2.y
        }  
}
console.log(addPoints({x:1,y:1},{x:2,y:2}))
console.log(addPoints({x:1,y:1,z:3},{x:2,y:2,z:3}))
