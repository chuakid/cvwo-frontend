import { Box, Divider, Heading, Skeleton, Stack } from '@chakra-ui/react'
import Project from '../../../types/Project'
import { getProjects } from '../../../services/projectservices'
import { useAppDispatch, useAppSelector } from '../../../store/typedHooks'
import { useEffect, useState } from 'react'
import { setAllTasks, setProjects } from '../../../store/projectSlice'
import { AxiosError } from 'axios'
import CreateProject from './CreateProject'
import ProjectLink from './ProjectLink'
import { getAllTasks } from '../../../services/taskservices'

const ProjectsComponent = () => {
    const projects = useAppSelector(state => Object.values(state.projects))
 
    return (
        <Box>
            <Heading mb="2" fontSize="2xl">PROJECTS</Heading>
            <Divider></Divider>
            <Stack>
                {projects.map((project: Project) => <ProjectLink key={project.id} project={project} />)}
            </Stack>
            <CreateProject></CreateProject>

        </Box>
    )
}

export default ProjectsComponent
