import React, { useState } from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import { Box, Divider, Flex, Input, Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { useAppSelector } from '../../../store/typedHooks'
import SearchItem from './SearchItem'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [search, setSearch] = useState("")
    const [selected, setSelected] = useState(0)
    const navigate = useNavigate()
    let searchedProjects = useAppSelector(state => Object.values(state.projects).filter((project) => project.name.includes(search)))

    function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
        switch (e.key) {
            case "ArrowUp": {
                setSelected(selected === 0 ? selected : selected - 1)
                break
            }
            case "ArrowDown": {
                setSelected(selected === searchedProjects.length - 1 ? selected : selected + 1)
                break
            }
            case "Enter": {
                navigate("/project/" + searchedProjects[selected].id)
                onClose()
                break
            }
        }
    }

    return (
        <>
            <Flex onClick={onOpen} alignItems="center" bgColor="blue.600" rounded="lg" px="3" w="50%">
                <SearchIcon mr="2"></SearchIcon>
                <Box color="white" fontSize="xl">Search Projects</Box>
            </Flex>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <Flex alignItems="center">
                        <SearchIcon ml="2" h="6" w="6" />
                        <Input _focus={{ outline: "none" }} flex="1" fontSize="2xl" border="none" placeholder="Search" rounded="none" py="7" value={search} onInput={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} onKeyUp={handleKeyUp} />
                    </Flex>
                    <Divider mb="3"></Divider>
                    <ModalBody px="3">
                        {searchedProjects.map((project, index) => <SearchItem key={project.id} setSelected={setSelected} index={index} selected={index === selected} closeModal={onClose} project={project} />)}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default SearchBar
