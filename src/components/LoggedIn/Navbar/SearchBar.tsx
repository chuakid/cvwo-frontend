import React, { useState } from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import { Box, Divider, Flex, Input, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { useAppSelector } from '../../../store/typedHooks'
import { Link as RouterLink } from 'react-router-dom'

const SearchBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [search, setSearch] = useState("")
    let projects = useAppSelector(state => state.projects.filter((project) => project.name.includes(search)))

    return (
        <>
            <Flex onClick={onOpen} alignItems="center" bgColor="blue.600" rounded="lg" px="3" w="50%">
                <SearchIcon mr="2"></SearchIcon>
                <Box color="white" fontSize="xl">Search Projects</Box>
            </Flex>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <Input fontSize="2xl" border="none" placeholder="Search" onInput={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />
                    <Divider mb="3"></Divider>
                    <ModalBody>
                        {projects.map((project) => <Link onClick={onClose} rounded="lg" _hover={{ bgColor: "blue.600", color: "white" }} as={RouterLink} display="block" fontSize="2xl" bgColor="gray.200" mb="2" p="2" width="100%"
                            to={"/project/" + project.id}>{project.name}</Link>)}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default SearchBar
