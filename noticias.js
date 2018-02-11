var http = require('http');

var server = http.createServer( function(req, res) {
    
    var categoria = req.url;

    switch(categoria){

    case '/tecnologia': 
        res.end("<html><body>Portal de Tecnologia</body></html>");
        break;
    case '/moda':
        res.end("<html><body>Portal de Moda</body></html>");
        break;
    case '/beleza':
        res.end("<html><body>Portal de Beleza</body></html>");
        break;
    default:
        res.end("<html><body>Portal de noticias</body></html>");

    }
    res.end("<html><body>Portal de noticias</body></html>");

});

server.listen(3000);