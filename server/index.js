const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const port = process.env.PORT || 3001
const server = app.listen(port, () => {
    console.log("Magic Started on port", port)
})
const socketio = require("socket.io")(server)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


/* SOCKET IO */
socketio.on("connection", socket => {
    console.log("New client connected");

    socket.on("message", text => {
        console.log(text)
    })

    socket.on("disconnect", () => {
        console.log("Client disconnected");
    })
})


/* WEB ROUTES */
app.get("/", (req, res) => {
    res.send("Hello world")
})

app.get("/webhook", (req, res) => {
    const { message } = req.body
    //return res.json({
    // message: message + "how are you?"
    //})
    socketio.emit("chat request", message)
})

