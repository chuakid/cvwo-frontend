import { API } from "./api"

export function login(username: string, password: string) {
    return API.post("/login", {
        "username": username,
        "password": password
    })
}