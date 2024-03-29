import store from '../store';
import axios from 'axios';

export function http() {
    return axios.create({
        baseURL: store.state.apiUrl,
        headers: {
            'Accept': 'application/json',
            Authorization: ''
        }
    })
}

export function httpFile() {
    return axios.create({
        baseURL: store.state.apiUrl,
        headers: {
            'Accept': 'application/json',
            'Content-Type' : ['multipart/form-data', 'application/json'],
            Authorization: ''
        }
    })
}