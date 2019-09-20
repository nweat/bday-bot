const express = require("express")
const bodyParser = require("body-parser")
const { Chatbot } = require("./chatbot/Chatbot")

const app = express()
const port = process.env.PORT || 3001
const server = app.listen(port, () => {
    console.log("Magic Started on port", port)
})
const socketio = require("socket.io")(server)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

socketio.on("connection", socket => {
    console.log("New client connected")

    Chatbot(socket)

    socket.on("disconnect", () => {
        console.log("Client disconnected")
    })
})

app.get("/", (req, res) => {
    res.send("Helloooo")
})
