import { Button, Input, InputGroup, InputRightAddon, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { createTask } from '../../../../services/taskservices'
import { addTaskToProject } from '../../../../store/projectSlice'
import { useAppDispatch } from '../../../../store/typedHooks'
import Task from '../../../../types/Task'

const CreateTaskInput = ({ projectid }: { projectid: number }) => {
    const dispatch = useAppDispatch()
    const [task, setTask] = useState("")
    const toast = useToast()
    function handleCreateTask() {
        if(task === "") {
            toast({
                description: "Please enter a task name",
                status: "error"
            })
            return
        }
        createTask(projectid, task).then(
            (result) => {
                dispatch(addTaskToProject({
                    id: result.data.id,
                    description: task,
                    projectid: projectid
                } as Task))
            })
            .catch(e => console.log(e))
        setTask("")

    }
    return (
        <InputGroup width="auto" boxShadow="lg">
            <Input w="64" _placeholder={{ color: "gray.400" }} value={task} onInput={(e) => {
                setTask(e.currentTarget.value)
            }} onKeyUp={(e) => {
                if (e.key === "Enter") {
                    handleCreateTask()
                }
            }} placeholder="Create a task"></Input>
            <InputRightAddon colorScheme="gray" as={Button} onClick={handleCreateTask}>
                Add Task
            </InputRightAddon>
        </InputGroup>
    )
}

export default CreateTaskInput
