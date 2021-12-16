import { chakra, Flex, ListItem } from '@chakra-ui/react'
import React from 'react'
import { useAppSelector } from '../../../../store/typedHooks'
import ProjectUser from '../../../../types/ProjectUser'

const UserComponent = ({ user }: { user: ProjectUser }) => {
    const curUser = useAppSelector(state => state.user.username)
    const isOwner = curUser === user.username
    return (
        <Flex as={ListItem} justifyContent="space-between">
            <span>
                {user.username} <chakra.span fontStyle="italic">{isOwner && " (you)"}</chakra.span>
            </span>
            <chakra.span opacity="40%" fontStyle="italic">{isOwner ? "Owner" : "Member"}</chakra.span>
        </Flex>
    )
}

export default UserComponent
