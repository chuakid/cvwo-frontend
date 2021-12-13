import Project from "./Project";
export default interface User {
    ID: number,
    Username?: string,
    Password?: string,
    Projects?: Project[]
}