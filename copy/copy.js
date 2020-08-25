let fs = require('fs')

function copy(src, dest){
    fs.writeFileSync(dest,fs.readFileSync(src))
}
function copybig(src, dest){
    fs.createReadStream(src).pipe(fs.createWriteStream(dest))
}
function main(argv){
    copy(argv[0],argv[1])
}
function mainbig(argv){
    copybig(argv[0],argv[1])
}
mainbig(process.argv.slice(2))