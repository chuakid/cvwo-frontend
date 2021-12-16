import { List, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'
import Project from '../../../../types/Project'
import AddUserComponent from './AddUserComponent'
import UserComponent from './UserComponent'

const ShareModal = ({ project, isOpen, onClose }: { project: Project, isOpen: boolean, onClose: VoidFunction }) => {   
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    Users in this project
                </ModalHeader>
                <ModalBody>
                    <List>
                        {project?.users?.map(user => <UserComponent key={user.username} user={user} />)}
                    </List>
                    <AddUserComponent projectid={project?.id} />
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ShareModal
