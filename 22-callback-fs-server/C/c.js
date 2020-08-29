var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    if(req.url === '/') {
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if(req.url === '/assets/img/flower-icon.png') {
        fs.createReadStream(__dirname + '/assets/img/flower-icon.png').pipe(res);
    } else if(req.url === '/assets/img/logo.png') {
        fs.createReadStream(__dirname + '/assets/img/logo.png').pipe(res);
    } else if(req.url === '/assets/img/payment-icon.png') {
        fs.createReadStream(__dirname + '/assets/img/payment-icon.png').pipe(res);
    } else if(req.url === '/assets/img/phone-icon.png') {
        fs.createReadStream(__dirname + '/assets/img/phone-icon.png').pipe(res);
    } else if(req.url === '/assets/img/truck-icon.png') {
        fs.createReadStream(__dirname + '/assets/img/truck-icon.png').pipe(res);
    } else if(req.url === '/assets/img/flowershop.jpg') {
        fs.createReadStream(__dirname + '/assets/img/flowershop.jpg').pipe(res);
    } else if(req.url === '/assets/img/13003.jpg') {
        fs.createReadStream(__dirname + '/assets/img/13003.jpg').pipe(res);
    } else if(req.url === '/assets/img/13007.jpg') {
        fs.createReadStream(__dirname + '/assets/img/13007.jpg').pipe(res);
    } else if(req.url === '/assets/css/style.css') {
        fs.createReadStream(__dirname + '/assets/css/style.css').pipe(res);
    } else if(req.url === '/assets/js/scripts.js') {
        fs.createReadStream(__dirname + '/assets/js/scripts.js').pipe(res);
    } else {
        res.writeHead(404);
        res.end();
    }

}).listen(8080, '127.0.0.1');