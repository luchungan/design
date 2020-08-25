let fs = require('fs')

function readText(pathname){
    var bin = fs.readFileSync(pathname)

    if(bin[0]===0xEF && bin[1]===0xBB && bin[2]===0xBF){ //去掉 utf-8 的BOM字符
        bin = bin.slice(3)
    }
    return bin.toString('utf-8')
}

//GBK 转utf-8 使用iconv库

var iconv = require('iconv-lite')

function readGBKText(pathname){
    var bin = fs.readFileSync(pathname)

    return iconv.decode(bin,'gbk')
}