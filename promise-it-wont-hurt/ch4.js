'use strict';

new Promise(function (success, reject) {
    // Your solution here
    success('I FIRED');
    reject(new Error('I DID NOT FIRE'));
}).then(console.log, console.log)
//.catch(console.log);
;
// Your solution here
