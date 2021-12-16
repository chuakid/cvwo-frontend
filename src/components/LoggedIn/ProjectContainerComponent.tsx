import { Box, Heading, useColorModeValue, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Project from '../../types/Project'
import TaskComponent from './Project/TaskComponent'


const ProjectContainerComponent = ({ project }: { project: Project }) => {
    const sortedTasks = project.tasks?.map(x => x)
        .sort((a, b) => { return a.completed && b.completed ? 0 : a.completed ? 1 : -1 }) || []
    const borderColor = useColorModeValue("gray.200", "gray.600")


    return (
        <Box mb="3" p="3" boxShadow="lg" border="1px" borderColor={borderColor} rounded="lg">
            <Heading _hover={{ color: "blue.500" }} as={Link} to={"/project/" + project.id} display="block" fontSize="2xl" mb="2" textAlign="center">Project: {project.name}</Heading>
            <Wrap>
                {sortedTasks.map((task) => {
                    return <WrapItem key={task.id}>
                        <TaskComponent task={task} />
                    </WrapItem>
                })}
            </Wrap>
        </Box>
    )
}

export default ProjectContainerComponent
