import axios, { AxiosError } from "axios";
import { API_URL } from "../globals"
import { logout } from "../helpers/userhelpers";

export let API = axios.create({
    baseURL: API_URL
});

export function setAPIToken(token: string) {
    API.defaults.headers.common['Authorization'] = "Bearer " + token;
}

API.interceptors.response.use(function (config) {
    return config;
}, function (error: AxiosError) {
        if(error.response?.data === "Invalid token\n") {
            logout()
            return
        }
        return Promise.reject(error);
    
});
