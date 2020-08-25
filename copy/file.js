var fs = require('fs')
var path = require('path')

fs.readFile('cp1.txt', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})
function travel(dir, callback) {
    try {

        fs.readdirSync(dir).forEach(element => {
            var pathname = path.join(dir,element)
            if(fs.statSync(pathname).isDirectory()){
                travel(pathname,callback)
            }else{
                callback(pathname)
            }
        });
    } catch (error) {
        console.log(error)
    }

}
// travel('cp11',(pathname)=>{console.log(pathname)})


//异步方式实现
function traval1(dir,callback,finish){
    fs.readdir(dir,(err,files)=>{
        (
            function next(i){
                if(i<files.length){
                    var pathname = path.join(dir,files[i])
                    fs.stat(pathname,(err,stats)=>{
                        if(stats.isDirectory()){
                            traval1(pathname,callback,()=>{
                                next(i+1)
                            })
                        }else{
                            callback(pathname,()=>{
                                next(i+1)
                            })
                        }
                    })
                }else{
                    finish && finish()
                }
            }
        )(0)
    })
}
traval1('cp11',(file,cb)=>{
    console.log(file)
    cb()
},()=>{console.log('读取完成')})
