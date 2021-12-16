import { Box, Divider, Heading, Stack } from '@chakra-ui/react'
import { useAppSelector } from '../../../store/typedHooks'
import Project from '../../../types/Project'
import CreateProject from './CreateProject'
import ProjectLink from './ProjectLink'

const ProjectsComponent = () => {
    const projects = useAppSelector(state => Object.values(state.projects))
 
    return (
        <Box>
            <Heading mb="2" fontSize="2xl">PROJECTS</Heading>
            <Stack>
                {projects.map((project: Project) => <ProjectLink key={project.id} project={project} />)}
            </Stack>
            <CreateProject></CreateProject>

        </Box>
    )
}

export default ProjectsComponent
