import { setAPIToken } from "../services/api"
import { setJwt } from "../store/userSlice"
import { store } from "../store/store"
import { setUsername as storeSetUsername } from "../store/userSlice"


export function setAppToken(token: string) {
    setAPIToken(token)
    store.dispatch(setJwt(token))
    localStorage.setItem("jwt", token)
}

export function setAppUsername(username: string) {
    store.dispatch(storeSetUsername(username))
    localStorage.setItem("username", username)
}