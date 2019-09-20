module.exports = {

    Chatbot(socket) {
        let BDAY_BOT = [
            { message: "Wat up! Bday bot here!! What's your name?", reply: '', isYesNo: false },
            { message: 'so when is your birthday?', reply: '', isYesNo: false },
            { message: 'Woohoo! Do you want to get the birthday countdown started?', reply: '', isYesNo: true }
        ]
        const ACCEPTED_YES_ANSWERS = ['yes', 'yeah', 'yup']
        const ACCEPTED_NO_ANSWERS = ['no', 'nah']
        const DONT_UNDERSTAND = "Sorry, I didn't get that :( "
        const GOODBYE = 'Talk to you later! Cheers!'
        const { isValidDate, bdayCountdownMessage } = require("./ChatBotUtils")
        const { createMessage } = require("../apis/JSONServerDB")


        if (BDAY_BOT[0].reply === '') {
            socket.emit('bot response', BDAY_BOT[0])
        }

        socket.on("user response", userResponse => {
            userResponse = userResponse.toLowerCase()

            if (BDAY_BOT[0].reply === '') {
                if (!userResponse) {
                    socket.emit('bot response', { message: DONT_UNDERSTAND, isYesNo: false })
                } else {
                    BDAY_BOT[0].reply = userResponse
                    createMessage(BDAY_BOT[0])
                    console.log(BDAY_BOT[0].message + " " + BDAY_BOT[0].reply)
                    BDAY_BOT[1].message = "Great to meet you " + BDAY_BOT[0].reply + ", " + BDAY_BOT[1].message
                    socket.emit('bot response', BDAY_BOT[1])
                }

            } else if (BDAY_BOT[1].reply === '') {
                if (isValidDate(userResponse)) {
                    BDAY_BOT[1].reply = userResponse
                    createMessage(BDAY_BOT[1])
                    console.log(BDAY_BOT[1].message + " " + BDAY_BOT[1].reply)
                    socket.emit('bot response', BDAY_BOT[2])
                } else {
                    socket.emit('bot response', { message: DONT_UNDERSTAND, isYesNo: false })
                }

            } else if (BDAY_BOT[2].reply === '') {
                if (ACCEPTED_YES_ANSWERS.indexOf(userResponse) > -1) {
                    BDAY_BOT[2].reply = userResponse
                    createMessage(BDAY_BOT[2])
                    console.log(BDAY_BOT[2].message + " " + BDAY_BOT[2].reply)
                    socket.emit('bot response', { message: bdayCountdownMessage(new Date(BDAY_BOT[1].reply), Date.now()), isYesNo: false })
                } else if (ACCEPTED_NO_ANSWERS.indexOf(userResponse) > -1) {
                    BDAY_BOT[2].reply = userResponse
                    createMessage(BDAY_BOT[2])
                    console.log(BDAY_BOT[2].message + " " + BDAY_BOT[2].reply)
                    socket.emit('bot response', { message: GOODBYE, isYesNo: false })
                } else {
                    socket.emit('bot response', { message: DONT_UNDERSTAND, isYesNo: false })
                }
            }
        })
    }
}