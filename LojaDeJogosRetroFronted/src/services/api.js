import axios from 'axios';

const api = axios.create({
    baseURL: 'http://3.133.156.134/api',
    headers: {
        'Content-Type': 'application/json',
    },
});


export default api;