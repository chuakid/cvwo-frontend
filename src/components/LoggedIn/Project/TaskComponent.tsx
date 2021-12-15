import { Button, Editable, EditableInput, EditablePreview, Flex } from '@chakra-ui/react'
import React from 'react'
import { renameTask, setTaskCompletion } from '../../../services/taskservices'
import { editTask } from '../../../store/projectSlice'
import { useAppDispatch } from '../../../store/typedHooks'

import Task from '../../../types/Task'

const TaskComponent = ({ task }: { task: Task }) => {
    const dispatch = useAppDispatch()

    function rename(nextValue: string) {
        renameTask(task.id, nextValue)
            .then((result) => {
                dispatch(editTask({
                    id: task.id,
                    description: nextValue,
                    projectid: task.projectid,
                    completed: task.completed
                } as Task))
            }).catch(e => console.log(e))
    }

    function toggleCompleted() {
        setTaskCompletion(task.id, !task.completed)
            .then((result) => {
                dispatch(editTask({
                    id: task.id,
                    description: task.description,
                    projectid: task.projectid,
                    completed: !task.completed
                }))
            }).catch(e => console.log(e))
    }
    const taskstyles = {
        bgColor: "blue.700",
        color: "white",
        opacity: task.completed ? "0.5" : "1",
        borderColor: "gray.400",
        border: "none",
        boxShadow: "md",
        rounded: "lg"
    }

    return (
        <Flex p="2" color={taskstyles.color} boxShadow={taskstyles.boxShadow} border={taskstyles.border} borderColor={taskstyles.borderColor} opacity={taskstyles.opacity} bgColor={taskstyles.bgColor} rounded={taskstyles.rounded} flexDirection="column" justifyContent="space-between" minH="100px" maxW="300px" >
            <Editable as="h3" fontSize="xl" defaultValue={task.description} onSubmit={rename}>
                <EditablePreview wordBreak="break-all" />
                <EditableInput />
            </Editable>
            <Button onClick={toggleCompleted} colorScheme={task.completed ? "red" : "blue"} fontSize="12" h="7" px="2" py="1">Mark As {task.completed ? "Not Done" : "Done"}</Button>
        </Flex>
    )
}

export default TaskComponent
