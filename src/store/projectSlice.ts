import { createSlice } from '@reduxjs/toolkit'
import Project from '../types/Project'
import Task from '../types/Task'

export const ProjectsSlice = createSlice({
    name: 'projects',
    initialState: {} as { [key: number]: Project },
    reducers: {
        setProjects: (state, action) => {
            for (let i = 0; i < action.payload.length; i++) {
                const project: Project = action.payload[i]
                state[project.id] = project
            }
        },
        addProject: (state, action) => {
            state[(action.payload as Project).id] = action.payload;
        },
        addTaskToProject(state, action) {
            const project = state[(action.payload as Task).projectid]
            if (!project) return state
            if (project && !project.Tasks) {
                project.Tasks = []
            }
            project?.Tasks?.push(action.payload)
        },
        setAllTasks(state, action) {
            for (let i = 0; i < action.payload?.length; i++) {
                const task = action.payload[i] as Task
                if (!state[task.projectid].Tasks) state[task.projectid].Tasks = []
                state[task.projectid].Tasks?.push(task)
            }
        },
        editTask(state, action) {
            const task: Task = action.payload
            const project = state[task.projectid]
            project.Tasks = project.Tasks?.map(x => x.id === task.id ? task : x)
        },
    }
})

// Action creators are generated for each case reducer function
export const { editTask, setAllTasks, setProjects, addProject, addTaskToProject } = ProjectsSlice.actions

export default ProjectsSlice.reducer
