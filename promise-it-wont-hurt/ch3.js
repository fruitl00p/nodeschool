'use strict';

new Promise(function (fulfill, reject) {
    // Your solution here
    setTimeout(function() {
        reject(new Error('REJECTED!'))
    }, 300);
}).then({}, function(err) {
    console.log(err.message)
});

// Your solution here
