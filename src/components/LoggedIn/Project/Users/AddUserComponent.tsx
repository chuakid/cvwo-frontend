import { Button, Flex, Input, InputGroup, InputRightAddon, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { addUserToProject } from '../../../../services/projectservices'
import { addUserToProject as storeAddUserToProject } from '../../../../store/projectSlice'
import { useAppDispatch } from '../../../../store/typedHooks'

const AddUserComponent = ({ projectid }: { projectid: number }) => {
    const toast = useToast()
    const dispatch = useAppDispatch()
    const [username, setUsername] = useState("")
    function handleAddUser() {
        addUserToProject(projectid, username).then(result => {
            setUsername("")
            dispatch(storeAddUserToProject({ projectid, username }))
        }).catch(_ => {
            toast({
                "description": "User not found or already added",
                "status": "error"
            })
        })
    }

    return (
        <Flex mt="2">
            <InputGroup size="sm" rounded="lg">
                <Input onInput={(e) => setUsername(e.currentTarget.value)} placeholder="Add other users" />
                <InputRightAddon onClick={handleAddUser} as={Button}>Add</InputRightAddon>
            </InputGroup>
        </Flex>
    )
}

export default AddUserComponent
