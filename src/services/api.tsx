import axios from "axios"; 
import { API_URL } from "../globals"

export let API = axios.create({
    baseURL: API_URL
});
console.log(API_URL);


export function setJWT(token: string) {
    API.defaults.headers.post['Authorization'] = "Bearer " + token;
}