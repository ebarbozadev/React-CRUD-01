import axios from 'axios';

const pegarURL = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Type": "application/json",
    }
});

export default pegarURL;