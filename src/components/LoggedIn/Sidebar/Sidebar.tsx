import { Flex, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import ProjectsComponent from './ProjectsComponent'

const Sidebar = () => {
    const bgColor = useColorModeValue("gray.50", "gray.700")
    return (
        <Flex p="3" w={{ base: "100px", md: "200px", lg: "300px" }} boxShadow="md" bgColor={bgColor} flexDirection="column" justifyContent="space-between">
            <ProjectsComponent />
        </Flex>
    )
}

export default Sidebar
