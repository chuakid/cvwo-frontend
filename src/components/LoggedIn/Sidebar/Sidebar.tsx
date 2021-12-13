import { Flex, Button } from '@chakra-ui/react'
import React from 'react'
import { setJwt } from '../../../store/jwtSlice'
import { useAppDispatch } from '../../../store/typedHooks'
import ProjectsComponent from './ProjectsComponent'

const Sidebar = () => {

    return (
        <Flex p="3" w={{ base: "30%", md: "25%", lg: "15%" }} bgColor="blue.800" flexDirection="column" justifyContent="space-between">
            <ProjectsComponent />
        </Flex>
    )
}

export default Sidebar
