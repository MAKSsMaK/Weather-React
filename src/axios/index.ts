import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(config => {
    config.url = 'forecast.json?key=' + process.env.REACT_APP_API_KEY + config.url;
    return config
});

export  default api;