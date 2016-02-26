var fs = require('fs');
var path = process.argv[3];
require('http').createServer(function (req, res) {
    fs.createReadStream(path).pipe(res);
}).listen(Number(process.argv[2]));