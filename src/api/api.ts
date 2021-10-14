import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3002/',
})

export interface NewMessageType {
    subject : string
    message : string
    email : string
}

export const emailAPI = {
    sendMessage(messageObject: NewMessageType ) {
        return instance.post<any>("/api/message", messageObject);
    },
}