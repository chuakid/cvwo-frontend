import { Flex } from '@chakra-ui/react'
import React from 'react'
import ProjectsComponent from './ProjectsComponent'

const Sidebar = () => {

    return (
        <Flex p="3" w={{ base: "100px", md: "200px", lg: "300px" }} bgColor="blue.800" flexDirection="column" justifyContent="space-between">
            <ProjectsComponent />
        </Flex>
    )
}

export default Sidebar
