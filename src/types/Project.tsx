import Task from "./Task"
import ProjectUser from "./ProjectUser"
export default interface Project{
    id: number,
    name: string,
    users?: ProjectUser[],
    tasks?: Task[]
}