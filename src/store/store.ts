import { configureStore } from '@reduxjs/toolkit'
import projectReducer from "./projectSlice"
import jwtReducer from "./jwtSlice"

export const store = configureStore({
    reducer: {
        projects: projectReducer,
        jwt: jwtReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch