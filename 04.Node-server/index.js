const http = require('http');

const PORT = 3000;
const server = http.createServer((req, res)=>{
    res.writeHead(200, {
        'content-type': 'application/json',
    });
    res.end(JSON.stringify({
        ide:1,
        name: "Issac Newton"
    }));
});

server.listen(PORT, ()=>{
    console.log(`We are listening to port ${PORT}...`)
});