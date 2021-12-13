import User from "./User"
import Task from "./Task"
export default interface Project{
    id: number,
    name: string,
    Users?: User[],
    Tasks?: Task[]
}