import { Box, Link, Skeleton, Stack } from '@chakra-ui/react'
import Project from '../../../types/Project'
import { getProjects } from '../../../services/projectservices'
import { useAppDispatch, useAppSelector } from '../../../store/typedHooks'
import { useEffect, useState } from 'react'
import { setProjects } from '../../../store/projectSlice'
import { AxiosError } from 'axios'
import CreateProject from './CreateProject'
import ProjectLink from './ProjectLink'

const ProjectsComponent = () => {
    const [loading, setLoading] = useState(true)
    const projects = useAppSelector(state => state.projects)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const controller = new AbortController()
        getProjects(controller.signal)
            .then((result) => {
                dispatch(setProjects(result.data))
            }).catch((error: AxiosError) => {
                console.log(error);
            }).finally(() => setLoading(false))
        return () => {
            controller.abort()
        }
    }, [dispatch])

    return (
        <Box>
            {loading || <Skeleton />}
            <Stack>
                {projects.map((project: Project) => <ProjectLink key={project.id} project={project} />)}
            </Stack>
            <CreateProject></CreateProject>

        </Box>
    )
}

export default ProjectsComponent
