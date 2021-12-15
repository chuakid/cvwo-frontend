import { DeleteIcon } from '@chakra-ui/icons'
import { Button, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverHeader, PopoverTrigger, useDisclosure } from '@chakra-ui/react'
import { deleteProject } from '../../../services/projectservices'
import { deleteProject as storeDeleteProject } from '../../../store/projectSlice'
import { useAppDispatch } from '../../../store/typedHooks'


const DeleteProjectButton = ({ id }: { id: number }) => {
    const { onOpen, onClose, isOpen } = useDisclosure()
    const dispatch = useAppDispatch()
    function handleDelete() {
        deleteProject(id)
            .then(result => {
                dispatch(storeDeleteProject(id))
            }).catch(e => console.log(e))
    }
    return (
        <Popover
            onClose={onClose}
            onOpen={onOpen}
            isOpen={isOpen}
        >
            <PopoverTrigger>
                <Button onClick={onOpen} bgColor="red.500" color="white" _hover={{ bgColor: "red.700" }}><DeleteIcon /> Delete Project</Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>
                    Are you sure you want to delete this project?
                </PopoverHeader>
                <PopoverBody>
                    <Button mr="2" display="inline-block" onClick={onClose}>No</Button>
                    <Button display="inline-block" bgColor="red.500" color="white" _hover={{ bgColor: "red.700" }} onClick={handleDelete}>Yes</Button>
                </PopoverBody>
            </PopoverContent>

        </Popover>

    )
}

export default DeleteProjectButton
