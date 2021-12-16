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
                state[project.id] = { ...state[project.id], ...project } //prevent overriding when visiing /project/{projectid}
            }
        },
        addProject: (state, action) => {
            state[(action.payload as Project).id] = action.payload;
        },
        addTaskToProject(state, action) {
            const project = state[(action.payload as Task).projectid]
            if (!project) return state
            if (project && !project.tasks) {
                project.tasks = []
            }
            project?.tasks?.push(action.payload)
        },
        setAllTasks(state, action) {
            for (let i in state) {
                state[i].tasks = []
            }
            for (let i = 0; i < action.payload?.length; i++) {
                const task = action.payload[i] as Task
                state[task.projectid].tasks?.push(task)
            }
        },
        editTask(state, action) {
            const task: Task = action.payload
            const project = state[task.projectid]
            project.tasks = project.tasks?.map(x => x.id === task.id ? task : x)
        },
        deleteProject(state, action) {
            const id = action.payload
            delete state[id]
        },
        deleteTask(state, action) {
            const task: Task = action.payload
            const project = state[task.projectid]
            project.tasks = project.tasks?.filter(x => x.id !== task.id)

        },
        editProject(state, action) {
            const project: Project = action.payload
            state[project.id] = project
        },
        addUserToProject(state, action) {
            const project: Project = state[action.payload.projectid]
            project.users.push({
                username: action.payload.username,
                role: 2
            })
        },
        clear(state) {
            return {}
        }
    }
})

// Action creators are generated for each case reducer function
export const { clear, addUserToProject, editProject, deleteTask, deleteProject, editTask, setAllTasks, setProjects, addProject, addTaskToProject } = ProjectsSlice.actions

export default ProjectsSlice.reducer
