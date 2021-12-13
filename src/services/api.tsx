import axios from "axios"; 
import { API_URL } from "../globals"

export let API = axios.create({
    baseURL: API_URL
});

export function setAPIToken(token: string) {    
    API.defaults.headers.common['Authorization'] = "Bearer " + token;
}