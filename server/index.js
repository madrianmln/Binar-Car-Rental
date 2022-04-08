// Memanggil modul HTTP
const http = require('http')

// Mendefinisikan PORT
const PORT = 8081

const fs = require ('fs');
const path = require ('path');
const PUBLIC_DIRECTORY = path.join(__dirname, '../public');

function renderHTML(htmlFileName) {
    const htmlFilePath = path.join(PUBLIC_DIRECTORY, htmlFileName);
    return fs.readFileSync(htmlFilePath, 'utf-8');
}

function onRequest(req, res){
    console.log(req.url);
    switch (req.url){
        case '/':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(renderHTML('index.html'));
            break;
        case '/cars':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(renderHTML('cars.html'));
            break;
        default:
            if(req.url.match("\.css$") || req.url.match("\.js$") || req.url.match("\.png$") || req.url.match("\.jpg$")){
            const publicFilePath = path.join(PUBLIC_DIRECTORY, req.url)
            fs.readFile(publicFilePath, (err, data) => {
            if(err){
            res.writeHead(404, {'Content-Type': 'text/plain'})
            res.write("Error: file not found")
            }else{
            res.write(data)
            }
            res.end()
            })
            }else{
            res.writeHead(404, {'Content-Type': 'text/plain'})
            res.end("Error: file not found")
            }
            break;          
    }
}
const server = http.createServer(onRequest)

server.listen(PORT, '0.0.0.0', () => {
console.log("Server is Running in Port :", PORT)})