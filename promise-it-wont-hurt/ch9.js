'use strict';

function parsePromised(string) {
    return new Promise((resolve, reject) => {
        try {
            resolve(JSON.parse(string));
        } catch (e) {
            reject(e);
        }
    });
}

parsePromised(process.argv[2])
    .catch(console.log);
