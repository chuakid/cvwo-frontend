import { List, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'
import Project from '../../../../types/Project'
import AddUserComponent from './AddUserComponent'
import MemberListItem from './MemberListItem'

const ShareModal = ({ project, isOpen, onClose, isOwner }: { project: Project, isOpen: boolean, onClose: VoidFunction, isOwner: boolean }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    Users in this project
                </ModalHeader>
                <ModalBody>
                    <List>
                        {project?.users?.map(user => <MemberListItem key={user.username} isOwner={isOwner} user={user} />)}
                    </List>
                </ModalBody>
                <ModalFooter>
                    {isOwner && <AddUserComponent projectid={project?.id} />}
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ShareModal
