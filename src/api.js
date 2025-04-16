import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5001/'
      : 'https://itunes-search-backend-nt0u.onrender.com', // Base URL for API calls.

  //when switch to render, use: "https://itunes-search-backend-nt0u.onrender.com"
});

export default api;
