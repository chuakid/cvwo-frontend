import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import ProjectsComponent from './ProjectsComponent'

const HomeComponent = () => {
    return (
        <Flex>
            <ProjectsComponent></ProjectsComponent>
            <Outlet />
        </Flex>
    )
}

export default HomeComponent
