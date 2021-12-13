import { Box, Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { createProject } from '../../../services/projectservices'
import { addProject } from '../../../store/projectSlice'
import { useAppDispatch } from '../../../store/typedHooks'

const CreateProject = () => {
    const [projectName, setProjectName] = useState("")
    let dispatch = useAppDispatch();
    function handleCreateProject() {
        if (projectName === "") return
        createProject(projectName)
            .then((result) => {
                dispatch(addProject(result.data))
            })
            .catch((e) => console.log(e))

    }
    return (
        <Box pt="3">
            <Input placeholder='Project Name' h="30px" bgColor="white" onInput={(e: React.ChangeEvent<HTMLInputElement>) => setProjectName(e.target.value)} w="100%"></Input>
            <Button outlineColor="blue.200" _hover={{ bgColor: "blue.400", color: "white" }} w="100%" mt="3" onClick={handleCreateProject}>Create Project</Button>
        </Box>
    )
}
export default CreateProject
