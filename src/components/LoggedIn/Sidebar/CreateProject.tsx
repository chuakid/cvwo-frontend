import { Box, Button, Input, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { createProject } from '../../../services/projectservices'
import { addProject } from '../../../store/projectSlice'
import { useAppDispatch } from '../../../store/typedHooks'

const CreateProject = () => {
    const [projectName, setProjectName] = useState("")
    let dispatch = useAppDispatch();
    const toast = useToast()
    function handleCreateProject() {
        if (projectName === "") {
            toast({
                description: "Please enter a project name",
                status: "error",
            })
            return
        } 
        createProject(projectName)
            .then((result) => {
                dispatch(addProject(result.data))
            })
            .catch((e) => console.log(e))
        setProjectName("")

    }
    return (
        <Box pt="3">
            <Input placeholder='Project Name' h="30px" onInput={(e: React.ChangeEvent<HTMLInputElement>) => setProjectName(e.target.value)} value={projectName} w="100%"></Input>
            <Button colorScheme="blue" w="100%" mt="3" onClick={handleCreateProject}>Create Project</Button>
        </Box>
    )
}
export default CreateProject
