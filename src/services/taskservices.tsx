import { API } from "./api"

export function createTask(projectid: number, description: string) {
    return API.post("/task", {
        projectid: projectid,
        description: description
    })
}

export function getAllTasks(signal: AbortSignal) {
    return API.get("/tasks", { signal: signal })
}