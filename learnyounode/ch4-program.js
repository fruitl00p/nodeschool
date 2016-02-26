var fs = require('fs');

fs.readFile(process.argv[2], function(err, buff) {
    "use strict";
    console.log(buff.toString().split('\n').length - 1);
});