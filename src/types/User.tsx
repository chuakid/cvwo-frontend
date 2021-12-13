import Project from "./Project";
export default interface User {
    id: number,
    Username?: string,
    Password?: string,
    Projects?: Project[]
}