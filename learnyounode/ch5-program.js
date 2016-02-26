var fs = require('fs');
var path = require('path');
var directory = process.argv[2];
var extension = '.'+process.argv[3];

fs.readdir(directory, function(err, contents) {
    "use strict";
    contents.map(function(value) {
        if (path.extname(value) === '.'+extension) {
            console.log(value);
        }
    });
});