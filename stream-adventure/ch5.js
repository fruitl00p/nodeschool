var through2 = require('through2');
var split = require('split');
var i=0;
process.stdin
    .pipe(split())
    .pipe(through2(function (line, _, next) {
        this.push(line.toString()['to'+(((++i % 2) !== 0) ? 'Lower':'Upper')+'Case']()+"\n");
        next();
    }))
    .pipe(process.stdout);