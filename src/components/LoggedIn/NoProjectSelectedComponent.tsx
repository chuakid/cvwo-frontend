import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { getAllTasks } from '../../services/taskservices'
import { setAllTasks } from '../../store/projectSlice'
import { useAppDispatch, useAppSelector } from '../../store/typedHooks'
import ProjectContainerComponent from './ProjectContainerComponent'

const NoProjectSelectedComponent = () => {
    //get all projects
    const projects = useAppSelector(state => Object.values(state.projects))
    const dispatch = useAppDispatch()
    useEffect(() => {
        const controller = new AbortController()
        getAllTasks(controller.signal)
            .then((result) => {
                dispatch(setAllTasks(result.data))
            })
        return () => controller.abort()
    }, [dispatch])
    return (
        <Box flex="1" p="3" overflowY="auto">
            {projects.map((project) => <ProjectContainerComponent key={project.id} project={project}></ProjectContainerComponent>)}
        </Box>
    )
}

export default NoProjectSelectedComponent
