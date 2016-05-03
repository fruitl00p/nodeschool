'use strict';

// const all = (promiseA, promiseB) => { // doesnt verify
function all (promiseA, promiseB) {
    return new Promise((resolve) => {
        let counter = 0;
        let values = [];
        const handler = (value, index) => {
            values[index] = value;
            counter++;

            if (counter >= 2) {
                resolve(values);
            }
        };
        promiseA.then((value) => {
            handler(value, 0);
        });
        promiseB.then((value) => {
            handler(value, 1);
        });
    });
};

all(getPromise1(), getPromise2()).then(console.log);

