import axios from 'axios'

const instance = axios.create({
    baseURL: '/api/',
})

export interface NewMessageType {
    subject : string
    message : string
    email : string
}

export const emailAPI = {
    sendMessage(messageObject: NewMessageType ) {
        return instance.post<any>("/message", messageObject);
    },
}