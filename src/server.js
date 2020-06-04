const express = require("express")
const server = express()

server.use(express.static("public"))

const nunjuncks = require("nunjucks")
nunjuncks.configure

server.get("/index", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

server.get("/create-point", (req, res) => {
    res.sendFile(__dirname + "/views/create-point.html")
})

server.get("/search-results", (req, res) => {
  res.sendFile(__dirname + "/views/search-results.html")
})


server.listen(3000)