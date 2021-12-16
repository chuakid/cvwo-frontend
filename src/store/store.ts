import { configureStore } from '@reduxjs/toolkit'
import projectReducer from "./projectSlice"
import userReducer from "./userSlice"

export const store = configureStore({
    reducer: {
        projects: projectReducer,
        user: userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch