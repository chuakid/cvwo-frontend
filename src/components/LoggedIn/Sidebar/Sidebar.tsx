import { Flex, Button } from '@chakra-ui/react'
import React from 'react'
import { setJwt } from '../../../store/jwtSlice'
import { useAppDispatch } from '../../../store/typedHooks'
import ProjectsComponent from './ProjectsComponent'

const Sidebar = () => {
    const dispatch = useAppDispatch()
    function handleLogout() {
        localStorage.setItem("jwt", "");
        dispatch(setJwt(""))
    }
    return (
        <Flex p="3" w={{ base: "30%", md: "25%", lg: "15%" }} height="100vh" bgColor="blue.800" flexDirection="column" justifyContent="space-between">
            <ProjectsComponent />
            <Button onClick={handleLogout} mb="2" mx="2">Logout</Button>
        </Flex>
    )
}

export default Sidebar
