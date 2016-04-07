'use strict';

Promise.reject('Henk reject').catch(console.log);
Promise.resolve('Henk fullfill').then(console.log);
