import User from "./User"
import Task from "./Task"
export default interface Project{
    ID: number,
    name: string,
    Users?: User[],
    Tasks?: Task[]
}