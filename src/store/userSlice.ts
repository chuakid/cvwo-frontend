import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
    name: 'user',
    initialState: {
        token: "",
        username: ""
    },
    reducers: {
        setJwt: (state, action) => {
            state.token = action.payload
        },
        setUsername: (state, action) => {
            state.username = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setJwt, setUsername } = UserSlice.actions

export default UserSlice.reducer
