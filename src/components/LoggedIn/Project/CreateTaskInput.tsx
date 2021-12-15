import { Button, Input, InputGroup, InputRightAddon } from '@chakra-ui/react'
import { createTask } from '../../../services/taskservices'
import React, { useState } from 'react'
import { useAppDispatch } from '../../../store/typedHooks'
import { addTaskToProject } from '../../../store/projectSlice'
import Task from '../../../types/Task'

const CreateTaskInput = ({ projectid }: { projectid: number }) => {
    const dispatch = useAppDispatch()
    const [task, setTask] = useState("")
    function handleCreateTask() {
        createTask(projectid, task).then(
            (result) => {
                dispatch(addTaskToProject({
                    id: result.data.id,
                    description: task,
                    projectid: projectid
                } as Task))
            }
        )

    }
    return (
        <InputGroup width="auto" boxShadow="lg">
            <Input w="64"  _placeholder={{ color: "gray.400" }} onInput={(e) => {
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
