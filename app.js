import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact-Me.html'))
    console.log(res.status);
    
})

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
    
})