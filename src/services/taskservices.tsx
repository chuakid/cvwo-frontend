import { API } from "./api"

export function createTask(projectid: number, description: string) {
    return API.post("/task", {
        projectid: projectid,
        description: description
    })
}
export function renameTask(taskid: number, description: string) {
    return API.post("/task/" + taskid, {
        description: description
    })
}

export function changeColor(taskid: number, color: number) {
    return API.post("/task/" + taskid + "/color", {
        color: color
    })
}

export function getAllTasks(signal: AbortSignal) {
    return API.get("/tasks", { signal: signal })
}

export function setTaskCompletion(taskid: number, completion: boolean) {
    return API.patch("/task/" + taskid + "/check", {
        "completed": completion
    })
}

export function deleteTask(taskid: number) {
    return API.delete("/task/" + taskid)
}