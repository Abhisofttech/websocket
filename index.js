const express = require('express');
const http = require('http');
const path = require('path');

const PORT = 3000

const app = express();
const server = http.createServer(app);
app.use(express.static(path.resolve('./public')));

app.get('/',(req,res)=>{
    res.sendFile('/public/index.html');
})

server.listen(PORT , ()=>{
    console.log(`Server started at PORT ${PORT}`);
})