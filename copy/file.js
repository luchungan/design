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
travel('cp11',(pathname)=>{console.log(pathname)})
