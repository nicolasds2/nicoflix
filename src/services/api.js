import axios from 'axios';
// URL
// 'https://api.themoviedb.org/3/'
// URL + API key
// 'https://api.themoviedb.org/3/movie/550?api_key=b0737901cd4add102d91f7839cf61096'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;