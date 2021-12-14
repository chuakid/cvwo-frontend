import React, { useState } from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import { Box, Divider, Flex, Input, Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { useAppSelector } from '../../../store/typedHooks'
import SearchItem from './SearchItem'

const SearchBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [search, setSearch] = useState("")
    let searchedProjects = useAppSelector(state => Object.values(state.projects).filter((project) => project.name.includes(search)))
    return (
        <>
            <Flex onClick={onOpen} alignItems="center" bgColor="blue.600" rounded="lg" px="3" w="50%">
                <SearchIcon mr="2"></SearchIcon>
                <Box color="white" fontSize="xl">Search Projects</Box>
            </Flex>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <Input fontSize="2xl" border="none" placeholder="Search" h="20" onInput={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />
                    <Divider mb="3"></Divider>
                    <ModalBody>
                        {searchedProjects.map((project) => <SearchItem closeModal={onClose} project={project} />)}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default SearchBar
