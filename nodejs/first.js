const http=require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('Hello Bahadır\n');
}).listen(9090,()=>{
    console.log('çalışıyor');
});