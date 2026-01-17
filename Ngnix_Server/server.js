const http= require('http');
const fs= require('fs');
const path= require('path');

const port = 6969;

const server= http.createServer( (req,res) => {                                //it create the server
    const filePath= path.join(__dirname, req.url === '/' ? "index.html" : req.url)   //it gives the file path which i have to show when req come

    const extName= String(path.extname(filePath).toLowerCase())                       //it fetches which file extension is searched it can be jpg , html

    const mimeTypes= {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.png': 'text/png',
        }

    const contentType= mimeTypes[extName] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
        if (err){
            if(err.code === 'ENOENT'){
                res.writeHead(404, {"Content-Type" : "text/Html"});
                res.end("404: File not found");
            }
        }

        else {

            res.writeHead(200 , {'Content-Type' : contentType})   //it tells the browser whats the status of the reading and which type of file has been sent
            res.end(content, 'utf-8');                        //its used to tell the browser that the content is end so that it stop loading

        }
    })







})             

server.listen(port, () => {                                          //it listens which port is declared
    console.log(`Server is listenting on port ${port}`);
    
})