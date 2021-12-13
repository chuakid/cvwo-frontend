import { createSlice } from '@reduxjs/toolkit'

interface UserState {
    jwt: string
}
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        jwt: ""
    } as UserState,
    reducers: {
        login: state => {
            state.jwt = ""
        },
    }
})

// Action creators are generated for each case reducer function
export const { login } = userSlice.actions

export default userSlice.reducer
