//Require http header
var http=require('http');
//Create server
http.createServer(function(req,res) {
    //HTTP status : 200 : OK
    //Content type:text/html
    res.writeHead(200,{'Content Type':'text/html'})
    //send the response body as "Hello World"
    res.end("Hello World");
}).listen(8080);