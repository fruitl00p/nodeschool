'use strict';
function alwaysThrows() {
    throw new Error('OH NOES');
}
function iterate(firt) {
    console.log(firt);
    return ++firt;
}

Promise.resolve(1)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch(console.log);
