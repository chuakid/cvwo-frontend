import { setAPIToken } from "../services/api"
import { setJwt } from "../store/userSlice"
import { store } from "../store/store"
import { setUsername as storeSetUsername } from "../store/userSlice"
import { clear as clearProjects } from "../store/projectSlice"
import { clear as clearUser } from "../store/userSlice"

export function setAppToken(token: string) {
    setAPIToken(token)
    store.dispatch(setJwt(token))
    localStorage.setItem("jwt", token)
}

export function setAppUsername(username: string) {
    store.dispatch(storeSetUsername(username))
    localStorage.setItem("username", username)
}

export function logout(){
    localStorage.setItem("jwt", "")
    localStorage.setItem("username", "")
    store.dispatch(clearProjects())
    store.dispatch(clearUser())
}