import { Button, Editable, EditableInput, EditablePreview, Flex } from '@chakra-ui/react'
import React from 'react'
import { renameTask } from '../../../services/taskservices'
import { renameTask as storeRenameTask } from '../../../store/projectSlice'
import { useAppDispatch } from '../../../store/typedHooks'

import Task from '../../../types/Task'

const TaskComponent = ({ task }: { task: Task }) => {
    const dispatch = useAppDispatch()

    function rename(nextValue: string) {
        renameTask(task.id, nextValue)
            .then((result) => {
                dispatch(storeRenameTask({
                    id: task.id,
                    description: nextValue,
                    projectid: task.projectid
                } as Task))
            }).catch(e => console.log(e))
    }
    return (
        <Flex p="2" borderColor="blue.200" minH="100px" maxW="300px" rounded="lg" border="1px" flexDirection="column" justifyContent="space-between">
            <Editable as="h3" fontSize="xl" defaultValue={task.description} onSubmit={rename}>
                <EditablePreview />
                <EditableInput />
            </Editable>
            <Button bgColor="red.300" _hover={{ bgColor: "red.700" }} color="white" fontSize="12" h="7" px="2" py="1">Mark As Done</Button>
        </Flex>
    )
}

export default TaskComponent
