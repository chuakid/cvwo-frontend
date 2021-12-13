import { createSlice } from '@reduxjs/toolkit'

export const JwtSlice = createSlice({
    name: 'jwt',
    initialState: "",
    reducers: {
        setJwt: (state, action) => {
            return action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setJwt } = JwtSlice.actions

export default JwtSlice.reducer
