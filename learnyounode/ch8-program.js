var http = require('http');

http.get(process.argv[2], function (response) {
    "use strict";
    response.setEncoding('utf8');
    var out = '';
    response.on('data', function (buff) {
        out += buff.toString();
    });
    response.on('end', function () {
        console.log(out.length);
        console.log(out);
    });
    response.on('error', console.error);
});