import { createSlice } from '@reduxjs/toolkit'
import Project from '../types/Project'

export const ProjectsSlice = createSlice({
    name: 'projects',
    initialState: [] as Project[],
    reducers: {
        setProjects: (state, action) => {
            return action.payload
        },
        addProject: (state, action) => {
            state.push(action.payload);
        }
    }
})

// Action creators are generated for each case reducer function
export const { setProjects, addProject } = ProjectsSlice.actions

export default ProjectsSlice.reducer
