import { Box, Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'

const HomeComponent = () => {
    return (
        <Flex flexDirection="column" minH="100vh">
            <Navbar />
            <Flex flex="1">
                <Sidebar></Sidebar>
                <Outlet />
            </Flex>
        </Flex>
        )
}

export default HomeComponent
