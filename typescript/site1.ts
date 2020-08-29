var global_num = 12
class Numbers{
    num_val = 13;
    static sval = 10
    storNum():void{
        var local_num: number = 2
    }
}

console.log("全局变量为: "+global_num)  
console.log(Numbers.sval)   // 静态变量
var obj = new Numbers(); 
console.log("实例变量: "+obj.num_val)