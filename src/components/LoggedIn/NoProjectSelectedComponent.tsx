import { Box } from '@chakra-ui/react'
import React from 'react'
import { useAppSelector } from '../../store/typedHooks'
import ProjectContainerComponent from './ProjectContainerComponent'

const NoProjectSelectedComponent = () => {
    //get all projects
    const projects = useAppSelector(state => Object.values(state.projects))

    return (
        <Box flex="1" p="3" overflowY="auto">
            {projects.map((project) => project.Tasks && <ProjectContainerComponent key={project.id} project={project}></ProjectContainerComponent>)}
        </Box>
    )
}

export default NoProjectSelectedComponent
