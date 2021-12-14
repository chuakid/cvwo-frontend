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

export function getAllTasks(signal: AbortSignal) {
    return API.get("/tasks", { signal: signal })
}

export function setTaskCompletion(taskid: number, completion: boolean) {
    return API.patch("/task/" + taskid + "/check" , {
        "completed": completion
    })
}