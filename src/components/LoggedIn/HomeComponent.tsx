import { Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar/Sidebar'

const HomeComponent = () => {
    return (
        <Flex>
            <Sidebar></Sidebar>
            <Outlet />
        </Flex>
    )
}

export default HomeComponent
