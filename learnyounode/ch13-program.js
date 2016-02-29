var url = require('url');

require('http').createServer(function (req, res) {
    if (req.method !== 'GET') {
        return res.end('send me a GET to the correct url\n')
    }

    var parsedUrl = url.parse(req.url, true);
    var path = parsedUrl.pathname;
    var query = parsedUrl.query;
    var time = new Date(query.iso);
    if (path === '/api/parsetime') {
        res.end(JSON.stringify({
           "hour": time.getHours(),
           "minute": time.getMinutes(),
           "second": time.getSeconds()
        }));
    }

    if (path === '/api/unixtime') {
        res.end(JSON.stringify({
            "unixtime": time.getTime()
        }));
    }

}).listen(Number(process.argv[2]));