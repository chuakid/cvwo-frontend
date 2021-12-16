import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { HStack, Button, Flex, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { setJwt } from '../../../store/userSlice'
import { useAppDispatch } from '../../../store/typedHooks'
import SearchBar from './SearchBar'

const Navbar = () => {
    const dispatch = useAppDispatch()
    const colorIcon = useColorModeValue(<SunIcon />, <MoonIcon />)
    const { toggleColorMode } = useColorMode()
    function handleLogout() {
        localStorage.setItem("jwt", "")
        dispatch(setJwt(""))
    }
    return (
        <Flex bgColor="gray.700" as="nav" px="4" py="2" justifyContent="space-between" >
            <Text as={Link} to="/" fontSize="3xl" color="white">TewDew</Text>
            <SearchBar></SearchBar>
            <HStack>
                <Button colorScheme="gray" onClick={toggleColorMode}>{colorIcon}</Button>
                <Button colorScheme="gray" onClick={handleLogout} mb="2" mx="2">Logout</Button>
            </HStack>

        </Flex>
    )
}

export default Navbar
