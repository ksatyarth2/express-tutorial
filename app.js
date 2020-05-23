var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req, res){
    console.log("request was made at:"+ req.url);
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        console.log("Request generated");
        fs.createReadStream(__dirname+'/index.html').pipe(res);
    }    
    else if (req.url === '/about') {
        res.writeHead(200,{'content-type':'text/html'});
        fs.createReadStream(__dirname+"/about.html").pipe(res);
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/404.html').pipe(res);
    }
});
server.listen(3000,'127.0.0.1');
    