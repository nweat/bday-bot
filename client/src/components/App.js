import React from "react"
import socketIOClient from "socket.io-client"

class App extends React.Component {
    componentDidMount() {
        const socket = socketIOClient("http://localhost:3001")
        socket.emit('message', "sent mesage");
    }

    render() {
        return (
            <div className="ui container">
                <div class="ui fluid action input">
                    <input type="text" placeholder="Search..." />
                    <div class="ui button">Send</div>
                </div>
            </div>
        )
    }
}

export default App
