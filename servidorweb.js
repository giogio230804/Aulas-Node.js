var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('Primeiro teste');
    res.end('<center><h2>Boa tarde!</h2><center/>');
}).listen(8080);