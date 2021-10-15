import axios from 'axios'

const instance = axios.create({
    /*baseURL: 'http://localhost:3002/',*/
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