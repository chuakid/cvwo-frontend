import { Editable, EditableInput, EditablePreview, Flex } from '@chakra-ui/react'
import { renameTask } from '../../../../services/taskservices'
import { editTask } from '../../../../store/projectSlice'
import { useAppDispatch } from '../../../../store/typedHooks'
import Task from '../../../../types/Task'
import ColorPicker from './ColorPicker'
import DeleteButton from './DeleteButton'
import MarkAsDoneButton from './MarkAsDoneButton'


const TaskComponent = ({ task, taskcolors }: { task: Task, taskcolors: { [key: string]: string } }) => {
    const dispatch = useAppDispatch()


    function rename(nextValue: string) {
        renameTask(task.id, nextValue)
            .then((result) => {
                dispatch(editTask({
                    ...task,
                    description: nextValue,
                } as Task))
            }).catch(e => console.log(e))
    }
    const taskstyles = {
        bgColor: taskcolors[task.color.toString()],
        opacity: task.completed ? "0.5" : "1",
        borderColor: "gray.400",
        border: "none",
        boxShadow: "md",
        rounded: "lg"
    }

    return (
        <Flex p="2" boxShadow={taskstyles.boxShadow} border={taskstyles.border} borderColor={taskstyles.borderColor} opacity={taskstyles.opacity} bgColor={taskstyles.bgColor} rounded={taskstyles.rounded} flexDirection="column" justifyContent="space-between" minH="100px" maxW="300px" >
            <Flex alignItems="flex-start" justifyContent="space-between">
                <Editable _hover={{ "color": "blue.200" }} cursor="pointer" as="h3" fontSize="xl" defaultValue={task.description} onSubmit={rename}>
                    <EditablePreview wordBreak="break-all" />
                    <EditableInput />
                </Editable>
                <DeleteButton task={task} />
            </Flex>
            <ColorPicker task={task} colors={taskcolors} color={task.color} />
            <MarkAsDoneButton task={task} />
        </Flex>
    )
}

export default TaskComponent
