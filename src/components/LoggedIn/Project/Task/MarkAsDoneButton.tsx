import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { setTaskCompletion } from '../../../../services/taskservices'
import { editTask } from '../../../../store/projectSlice'
import { useAppDispatch } from '../../../../store/typedHooks'
import Task from '../../../../types/Task'

const MarkAsDoneButton = ({ task }: { task: Task }) => {
    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState(false)
    function toggleCompleted() {
        setLoading(true)
        setTaskCompletion(task.id, !task.completed)
            .then((result) => {
                dispatch(editTask({
                    ...task,
                    completed: !task.completed
                }))
                setLoading(false)
            }).catch(e => console.log(e))
    }
    return (
        <Button isLoading={loading} onClick={toggleCompleted} colorScheme={task.completed ? "red" : "blue"} fontSize="12" h="7" px="2" py="1">Mark As {task.completed ? "Not Done" : "Done"}</Button>

    )
}

export default MarkAsDoneButton
