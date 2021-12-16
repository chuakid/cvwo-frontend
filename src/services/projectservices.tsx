import { API } from "./api"

export function getProjects(signal: AbortSignal) {
    return API.get("/projects", { signal })
}

export function createProject(name: string) {
    return API.post("/project", { name })
}

export function getProject(id: number) {
    return API.get("/project/" + id)
}

export function deleteProject(id: number) {
    return API.delete("/project/" + id)
}

export function addUserToProject(projectid: number, username: string) {
    return API.post("/project/" + projectid + "/" + username)
}
