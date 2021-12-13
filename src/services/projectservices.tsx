import { API } from "./api"

export function getProjects() {
    return API.get("/projects")
}
