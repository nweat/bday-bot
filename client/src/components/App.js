import React from "react"
import socketIOClient from "socket.io-client"
import Message from "./Message"

const socket = socketIOClient("http://localhost:3001")

class App extends React.Component {
    state = { message: '', messageList: [], typing: false }

    componentDidMount() {
        socket.on("bot response", ({ message, isYesNo }) => {
            this.setState({ typing: true })
            setTimeout(() => {
                this.setState({ messageList: [...this.state.messageList, <Message onClickYesNo={this.onClickYesNo} isYesNo={isYesNo} message={message} key={message} iconName="info" />] })
                this.setState({ typing: false })
            }, 800)
        })
    }

    onInputChange = event => {
        this.setState({ message: event.target.value })
    }

    onClickYesNo = selection => {
        this.setState({ message: selection })
        this.handleUserReponse()
    }

    sendMessageToBot = (e) => {
        if (e.key === 'Enter') {
            this.handleUserReponse()
        }
    }

    handleUserReponse = () => {
        socket.emit('user response', this.state.message)
        this.setState({ messageList: [...this.state.messageList, <Message message={this.state.message} key={this.state.message} iconName="user circle" />] })
        this.setState({ message: '' })
    }

    renderTypingNotification = () => {
        if (this.state.typing) {
            return (
                <img src="typing.gif" width="50" alt=''></img>
            )
        }
    }

    render() {
        return (
            <div className="ui container">
                <div className="ui fluid input">
                    <input type="text" placeholder="Chat with the bday bot.." value={this.state.message} onKeyPress={this.sendMessageToBot} onChange={this.onInputChange} />
                </div>
                {this.renderTypingNotification()}
                {this.state.messageList}
            </div>
        )
    }
}

export default App
