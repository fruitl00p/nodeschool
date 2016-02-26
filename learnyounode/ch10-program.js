var moment = require('moment');
require('net').createServer(function (socket) {
    socket.end(moment().format('YYYY-MM-DD HH:mm') + "\n");
}).listen(Number(process.argv[2]));