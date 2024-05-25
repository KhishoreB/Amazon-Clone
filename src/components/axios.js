import axios from "axios"

const instance = axios.create({
    baseURL: '...' // api (cloud function)  URL 
});


export default instance;
