var http = require('http');
var n = require('./primeiromodulo');
var dia = require('./moduloData')

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
res.write('Segunda aula Node js <br>');
res.write('Prof. ')
res.write(n.nome()+ '<br>');
//res.write(Date());
res.write(dia.diaDaSemana()+'<br>')
res.end('<h2>Bom dia!</h2>');
}).listen(8080);