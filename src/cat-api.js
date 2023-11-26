const helloMessage = "hello!";
export const hello = () => helloMessage;

const API_KEY = "live_1Q1SJnrXjHN5Yr8VjAyM4c2f8PloqrP5GRLbKixfehjztGk1eec8nDZzNHOI6xp7";

import axios from "axios";

axios.defaults.headers.common["x-api-key"] = API_KEY;

// for list of breeds

export function fetchBreeds () {
    const BASE_URL = "https://api.thecatapi.com/v1";
    const ENDPOINT = "breeds";

    const params = new URLSearchParams ({
        api_key: API_KEY,
    });

    return fetch(`${BASE_URL}/${ENDPOINT}?${params}`).then((response) => {
        if (!response.ok) {
            refs.error.hidden = false;
            throw new Error("404 not found!");
        }
        return response.json();
    })
}

// for getting information

export function fetchCatByBreeds (breed) {
    const API_KEY = "live_1Q1SJnrXjHN5Yr8VjAyM4c2f8PloqrP5GRLbKixfehjztGk1eec8nDZzNHOI6xp7";
    const BASE_URL = "https://api.thecatapi.com/v1";
    const ENDPOINT = "images/search";

    const params = new URLSearchParams ({
        api_key: API_KEY,
        breed_ids: breed,
    })

    return fetch(`${BASE_URL}/${ENDPOINT}?${params}`).then((response) => {
        if (!response.ok) {
            
            throw new Error("404 not found!");
        }
        return response.json();
    })
}