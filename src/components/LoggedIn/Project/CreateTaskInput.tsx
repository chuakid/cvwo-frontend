import { Input } from '@chakra-ui/react'
import { createTask } from '../../../services/taskservices'
import React from 'react'
import { useAppDispatch } from '../../../store/typedHooks'
import { addTaskToProject } from '../../../store/projectSlice'
import Task from '../../../types/Task'

const CreateTaskInput = ({ projectid }: { projectid: number }) => {
    const dispatch = useAppDispatch()
    function handleCreateTask(taskDesc: string) {
        createTask(projectid, taskDesc).then(
            (result) => {
                dispatch(addTaskToProject({
                    id: result.data.id,
                    description: taskDesc,
                    projectid: projectid
                } as Task))
            }
        )

    }
    return (
        <Input mt="3" w="64" boxShadow="md" borderColor="gray.200" border="1px" _placeholder={{color: "gray.400"}} onKeyUp={(e) => {
            if (e.key === "Enter") {
                handleCreateTask((e.target as HTMLInputElement).value)
            }
        }} placeholder="Create a task"></Input>
    )
}

export default CreateTaskInput
