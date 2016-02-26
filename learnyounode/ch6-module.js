var fs = require('fs');
var path = require('path');
module.exports = function(directory, filterStr, cb) {
    fs.readdir(directory, function(err, list) {
        if (err) {
            cb(err);
            return;
        }
        cb(null, list.filter(function(file) {
            return path.extname(file) === '.' + filterStr;
        }));
    });
};
