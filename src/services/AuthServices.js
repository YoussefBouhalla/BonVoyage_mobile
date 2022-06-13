import axios from "axios"

const AppURL = "http://192.168.137.1:3000/auth";

export function Login(data) {
    return axios.post(`${AppURL}/login`, data);
}

export function register(data) {
    console.log('data',data);
    return axios.post(`${AppURL}/signup`, data);
}