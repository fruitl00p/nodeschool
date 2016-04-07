'use strict';
//
// this is the actual solution, but shouldn't work ;) first and second are injected by the promise runner
// first().then(second).then(console.log);


// should work, but doesnt ;) how'd you like them apples ;)
var first = function(value) {
    return Promise.resolve(value);
};

var second = function(value) {
    return Promise.resolve(value);
};

first(process.argv[2])
    .then(second)
    .then(console.log)
    .catch(console.error);
