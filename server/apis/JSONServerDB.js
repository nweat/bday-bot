const axios = require("axios")

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/'
})

async function createMessage(message) {
    await axiosInstance.post('/messages', message)
}

module.exports = {
    createMessage: createMessage
}

