const http = require('http');

const server =  http.createServer((req, res) => {
    console.log(req.url)
    res.end('<h1>Hellow NodeJS.. I am Ahbab </h1>')
})

server.listen(4000, ()=>{
     console.log("Server is Running Prot 4000");
     
})

