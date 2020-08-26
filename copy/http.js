//实现一个http请求

var http = require('http')

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text-plain'}) //Content-Type 描述请求的媒体类型
    res.end('hello,world!')
}).listen(8081)


http.createServer((req,res)=>{
    console.log(req.headers,req.method)
    req.on('data',(chunk)=>{
        console.log('chunk',chunk.toString('utf-8'))

    })
    
    req.on('end',()=>{
        console.log('end')
        console.log(res.sendDate)
        // res.sendDate('hello')
        // for(var key in res){
            
        //     if(typeof(res.key) == "function" ){
        //         console.log(key )
        //     }
            
        // }
    })
    let result = {ret:0,success:'data'}
    res.end(JSON.stringify(result))
   
}).listen(8080)