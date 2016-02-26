var http = require('http');
var out = [];
var done = 0;
var urls = process.argv.slice(2);

urls.forEach(function(url, i) {
    "use strict";
    http.get(url, function (response) {
        out[i] = '';
        response.setEncoding('utf8');
        response.on('data', function (buff) {
            out[i] += buff.toString();
        });
        response.on('end', function () {
            if (++done === urls.length) {
                console.log(out.join('\n'));
            }
            //console.log(out);
        });
        response.on('error', console.error);
    });
});
