import axios from "axios"

const AppURL = "http://192.168.137.1:3000/tours";

export function searchForTours(data) {
    return axios.post(`${AppURL}/`, data);
}
