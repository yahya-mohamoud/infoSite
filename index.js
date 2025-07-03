import http from 'http'
import fs from 'fs'

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html'})
        fs.readFile('index.html', (err, data) => {
            if(err) {
                res.writeHead(500)
                res.end('error loading index.html')
                console.log('not working');
                
            } else {
                res.end(data)
            }
        })
    } else if (req.url === '/about') {
         fs.readFile('about.html', (err, data) => {
            if(err) {
                res.writeHead(500)
                res.end('error loading index.html')
            } else {
                res.end(data)
            }
        
        })
    } else if(req.url === '/contact') {
        fs.readFile('contact-Me.html', (err, data) => {
            if(err) {
                res.writeHead(500)
                res.end('what the hell happened to the url')
            } else {
                res.end(data)
            }

        })
    } else if (req.url !== '/about' || '/' || '/contact') {
        fs.readFile('404.html', (err, data) => {

            if(err) {
                res.writeHead(500)
                res.end('No routes are available')
            } else {
                res.end(data)
            }
        })
    }
})


const Port = 8080;
server.listen(Port, () => {
    console.log(`Server started on PORT: ${Port}`);

})