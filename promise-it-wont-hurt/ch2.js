'use strict';

new Promise(function (fulfill, reject) {
    // Your solution here
    setTimeout(function() {
        fulfill('FULFILLED!')
    }, 300);
}).then(console.log);

// Your solution here
