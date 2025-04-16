import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001/', // Base URL for API calls.

  //when switch to render, do this: "https://itunes-search-backend-nt0u.onrender.com"
});

export default api;
