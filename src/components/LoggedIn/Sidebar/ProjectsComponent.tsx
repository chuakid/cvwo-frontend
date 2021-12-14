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
    const [loading, setLoading] = useState(true)
    const projects = useAppSelector(state => Object.values(state.projects))
    const dispatch = useAppDispatch()

    useEffect(() => {
        const controller = new AbortController()

        getProjects(controller.signal)
            .then((result) => {
                dispatch(setProjects(result.data))
            })
            .then(() => getAllTasks(controller.signal))
            .then((result) => {
                dispatch(setAllTasks(result.data))
            }).catch((error: AxiosError) => {
                console.log(error);
            }).finally(() => setLoading(false))


        return () => {
            controller.abort()
        }
    }, [dispatch])

    return (
        <Box>
            <Heading color="white" mb="2" fontSize="2xl">PROJECTS</Heading>
            <Divider></Divider>
            {loading || <Skeleton />}
            <Stack>
                {projects.map((project: Project) => <ProjectLink key={project.id} project={project} />)}
            </Stack>
            <CreateProject></CreateProject>

        </Box>
    )
}

export default ProjectsComponent
