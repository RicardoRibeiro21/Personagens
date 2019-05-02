import axios from 'axios';

const api = axios.create({
    baseUrl = "https://salty-atoll-57329.herokuapp.com/"
})
export default api;