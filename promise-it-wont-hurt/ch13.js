'use strict';
var qio = require('q-io/http');

qio.read('http://localhost:7000')
    .then((sessionId)=>{
        return qio.read('http://localhost:7001/' + sessionId);
    })
    .then((results) => {
        console.log(JSON.parse(results));
    })
    .catch(console.err)
;
