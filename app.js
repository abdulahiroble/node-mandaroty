const express = require("express")
const app = express();
const path = require("path");
const cheerio = require("cheerio");
// const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const axios = require("axios")

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

app.get('/tools', (req, res) => {
    res.sendFile(__dirname + "/public/tools/tools.html")
})

app.get('/teori', (req, res) => {
    res.sendFile(__dirname + "/public/teori/teori.html")
})

app.get('/scraping', (req, res) => {
    res.sendFile(__dirname + "/public/scraping/scraping.html")
})

const url = "https://thehub.io/jobs"

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const titles = []

        $('.card-job-find-list__position', html).each(function () {
            const jobtitle = $(this).text()

            titles.push({ jobtitle })
        })

        console.log(titles)
    }).catch(err => console.log(err))


const PORT = process.env.PORT || 3000

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(`Error message: ${error}`)
    }
    console.log("Server is running on port", server.address().port)
})