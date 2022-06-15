import axios from "axios"

const AppURL = "http://192.168.137.1:3000/cities";

export function getCities() {
    return axios.get(`${AppURL}/`);
}

export function getCity(cityId) {
    return axios.get(`${AppURL}/${cityId}`);
}

