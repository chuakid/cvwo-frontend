import { API } from "./api"

export function getProjects(signal: AbortSignal) {
    return API.get("/projects", { signal })
}

export function createProject(name: string) {
    return API.post("/project", { name })
}
