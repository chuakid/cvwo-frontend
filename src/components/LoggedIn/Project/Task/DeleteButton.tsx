import { DeleteIcon } from '@chakra-ui/icons'
import { Button, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { deleteTask } from '../../../../services/taskservices'
import { deleteTask as storeDeleteTask } from '../../../../store/projectSlice'
import { useAppDispatch } from '../../../../store/typedHooks'
import Task from '../../../../types/Task'

const DeleteButton = ({ task }: { task: Task }) => {
    const dispatch = useAppDispatch()
    const toast = useToast()
    const [loading, setLoading] = useState(false)

    function handleDelete() {
        setLoading(true)
        deleteTask(task.id).then(result => {
            dispatch(storeDeleteTask(task))
            toast({
                description: "Task deleted"
            })
        }).catch(e => console.log(e))
    }

    return (
        <Button isLoading={loading} onClick={handleDelete} size="xs" ml="5" colorScheme="red"><DeleteIcon /></Button>
    )
}

export default DeleteButton
