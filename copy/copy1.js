const { createReadStream, createWriteStream } = require("fs");
function copy(src, dest){
    var rs = createReadStream(src,(err,data)=>{
        if(err){
            console.log(err)
        }else{
            console.log(data)
        }
    })
    var ws = createWriteStream(dest)
    
    rs.on('data',function(chunk){
        if(ws.write(chunk) === false){
            // console.log(chunk)
            rs.pause()
        }
    })
    
    rs.on('end',function(){
        ws.end()
    })
    
    ws.on('drain',function(){
        rs.resume()
    })
}

function main(argv){
    copy(argv[0],argv[1])
}

main(process.argv.slice(2))
