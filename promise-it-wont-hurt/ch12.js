'use strict';
var qio = require('q-io/http');

qio.read('http://localhost:1337').then((stream)=>{
    return JSON.parse(stream);
}).then(console.log).catch(console.err);