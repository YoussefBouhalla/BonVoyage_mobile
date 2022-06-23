import axios from "axios"

const AppURL = "http://192.168.137.1:3000/tours";

export function searchForTours(data) {
    return axios.post(`${AppURL}/search`, data);
}

export function getRecommendedTours() {
    return axios.get(`${AppURL}/recommended`);
}

export function markAsFavorite(tourId, userId) {
    return axios.post(`${AppURL}/${tourId}/favorite`, {userId} );
}

export function removeFavorite(tourId, userId) {
    return axios.delete(`${AppURL}/${tourId}/favorite/${userId}` );
}

export function checkFavorite(tourId, userId) {
    return axios.post(`${AppURL}/${tourId}/favorite/check`, {userId} );
}
