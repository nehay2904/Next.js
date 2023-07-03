const http = require('http')
const data = require('./data')

http.createServer(function(req,res){
   

if(req.url=== '/') {
    res.end('The databasse is ' + data.userName)
}
else if(res.url === '/products' ){
    res.end('The databasse password is' )
}


}).listen(4000)