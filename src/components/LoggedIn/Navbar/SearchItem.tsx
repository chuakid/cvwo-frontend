import { LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
import Project from '../../../types/Project'

const SearchItem = ({ closeModal, project, selected }: { closeModal: React.MouseEventHandler<HTMLAnchorElement>, project: Project, selected: boolean }) => {
    const styles = {
        bgColor: selected ? "blue.600" : "gray.200",
        color: selected ? "white" : "black"
    }
    return (
        <LinkBox>
            <LinkOverlay key={project.id} onClick={closeModal} rounded="lg" as={RouterLink} display="block" fontSize="2xl" color={styles.color} bgColor={styles.bgColor} mb="2" p="2" width="100%"
                to={"/project/" + project.id}>{project.name}
            </LinkOverlay></LinkBox>
    )
}

export default SearchItem
