'use strict';

new Promise(function (success, reject) {
    // Your solution here
    success('PROMISE VALUE');
}).then(console.log)
.catch(console.log);
console.log('MAIN PROGRAM');
