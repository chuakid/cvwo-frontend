import { SearchIcon } from '@chakra-ui/icons'
import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { setJwt } from '../../../store/jwtSlice'
import { useAppDispatch } from '../../../store/typedHooks'
import SearchBar from './SearchBar'

const Navbar = () => {
    const dispatch = useAppDispatch()
    function handleLogout() {
        localStorage.setItem("jwt", "");
        dispatch(setJwt(""))
    }
    return (
        <Flex bgColor="blue.500" as="nav" px="4" py="2" justifyContent="space-between" cursor="pointer">
            <Text fontSize="3xl" color="white">TewDew</Text>
            <SearchBar></SearchBar>
            <Button onClick={handleLogout} _hover={{ bgColor: "gray.300" }} mb="2" mx="2">Logout</Button>

        </Flex>
    )
}

export default Navbar
