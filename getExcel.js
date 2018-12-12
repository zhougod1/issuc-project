var fs = require('fs');
var http = require('http');
var xlsx = require('node-xlsx');
// var axios = require('axios');


var get = http.get('http://file.fangline.cn/导出出售房源数据1539400945466.xls', (res) => {
    const totalLength =  res.headers['content-length'];
    let n = 0;
    //一定要设置response的编码为binary否则会下载下来的图片打不开
    res.on("data", (chunk) => {;
        imgData += chunk;
    });
    res.on("end", () => {
        var buffer = xlsx.build([
            {
                data:imgData   
            }
        ]);
        fs.writeFileSync('D:/download/test.xls',buffer,{'flag':'w'});
        // fs.writeFile('D:/download/test.xls', imgData, function(err) {
        //     if (err) {
        //     } else {
        //     }
        // });
    });
    res.on("error", (err) => {
    });
});
get.on('error', (err) => {
});

module.exports = get;
