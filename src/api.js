import axios from 'axios';

const api = axios.create({
    baseURL: 'https://itunes-search-backend-nt0u.onrender.com' || 'http://localhost:5000', // Base URL for API calls.
});

export default api;
