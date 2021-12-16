import { chakra, Flex, ListItem } from '@chakra-ui/react'
import React from 'react'
import { useAppSelector } from '../../../../store/typedHooks'
import ProjectUser from '../../../../types/ProjectUser'

const UserComponent = ({ user, isOwner }: { user: ProjectUser, isOwner: boolean }) => {
    const isCurrentUser = useAppSelector(state => state.user.username) === user.username
    return (
        <Flex as={ListItem} justifyContent="space-between">
            <span>
                {user.username} <chakra.span fontStyle="italic">{isCurrentUser && " (you)"}</chakra.span>
            </span>
            <chakra.span opacity="40%" fontStyle="italic">{user.role === 1 ? "Owner" : "Member"}</chakra.span>
        </Flex>
    )
}

export default UserComponent
