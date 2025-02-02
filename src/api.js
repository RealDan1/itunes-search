import axios from 'axios';

const api = axios.create({
    baseURL: 'https://itunes-search-backend-nt0u.onrender.com', // Base URL for API calls.
});

export default api;
