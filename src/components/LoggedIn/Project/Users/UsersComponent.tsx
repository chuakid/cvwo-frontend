import { LinkIcon } from '@chakra-ui/icons'
import { Button, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Project from '../../../../types/Project'
import ShareModal from './ShareModal'

const UsersComponent = ({project, isOwner}: {project: Project, isOwner: boolean}) => {
    const {isOpen, onClose, onOpen} = useDisclosure()
    return (
        <>
            <Button colorScheme="green" onClick={onOpen}><LinkIcon mr="2"/> Share</Button>
            <ShareModal isOwner={isOwner} isOpen={isOpen} onClose={onClose} project={project} />
        </>
    )
}

export default UsersComponent
