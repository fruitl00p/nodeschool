var filterer = require('./ch6-module.js');
filterer(process.argv[2], process.argv[3], function(err, results) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(results.join("\n"));
});