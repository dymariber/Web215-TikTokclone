import axios from 'axios';

const instance = axios.create ({
    baseURL: 'https://tiktok-mern-berrien.herokuapp.com/'
});

export default instance;