import axios from 'axios';

const api = axios.create({
  baseURL: 'https://itunes-search-backend-nt0u.onrender.com', // Base URL for API calls. switch to 'http://localhost:5001/' if using local dev environment

  //when switch to render, do this: "https://itunes-search-backend-nt0u.onrender.com"
  // use for auto switch:
  // baseURL: process.env.NODE_ENV === 'development'
  //? 'http://localhost:5001/'
  //: 'https://itunes-search-backend-nt0u.onrender.com',
});

export default api;
