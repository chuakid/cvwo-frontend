import { Box } from '@chakra-ui/react'
import React from 'react'
import Task from '../../../types/Task'

const TaskComponent = ({task} : {task: Task}) => {
    return (
        <Box>
            {task.description}
        </Box>
    )
}

export default TaskComponent
