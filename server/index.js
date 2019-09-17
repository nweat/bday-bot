const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json())

const API_PORT = 5000

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.listen(API_PORT, () => {
    console.log("Magic Started on port", API_PORT)
})