const express = require("express")
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/forside/index.html")
})

app.get('/terminal', (req, res) => {
    res.sendFile(__dirname + "/public/terminal/terminal.html")
})

app.get('/codesnippets', (req, res) => {
    res.sendFile(__dirname + "/public/codesnippets/codesnippets.html")
})


const PORT = process.env.PORT || 3000

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(`Error message: ${error}`)
    }
    console.log("Server is running on port", server.address().port)
})