import { LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
import Project from '../../../types/Project'
import Task from '../../../types/Task'

const SearchItem = ({ closeModal, project, task }: { closeModal: React.MouseEventHandler<HTMLAnchorElement>, project: Project, task?: Task }) => {
    return (
        <LinkBox>
            <LinkOverlay key={project.id} onClick={closeModal} rounded="lg" _hover={{ bgColor: "blue.600", color: "white" }} as={RouterLink} display="block" fontSize="2xl" bgColor="gray.200" mb="2" p="2" width="100%"
                to={"/project/" + project.id}>{project.name}
                {task && <>{task.description}</>}
            </LinkOverlay></LinkBox>
    )
}

export default SearchItem
