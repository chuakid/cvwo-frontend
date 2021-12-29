import { Select } from '@chakra-ui/react'
import React from 'react'
import { changeColor } from '../../../../services/taskservices'
import { editTask } from '../../../../store/projectSlice'
import { useAppDispatch } from '../../../../store/typedHooks'
import Task from '../../../../types/Task'

const ColorPicker = ({ task, colors, color }: { task: Task, colors: { [key: string]: string }, color: number }) => {
    const dispatch = useAppDispatch()
    function handleSelect(e: React.FormEvent<HTMLSelectElement>) {
        const color = parseInt(e.currentTarget.value)
        changeColor(task.id, color)
            .then(result => dispatch(editTask({
                ...task,
                color
            })))
            .catch(e => console.log(e))
    }
    return (
        <Select defaultValue={color} onInput={handleSelect} my="2" size="xs" >
            {
                Object.keys(colors).map(x => <option key={x} value={x}>{colors[x].split(".")[0]}</option>
                )
            }
        </Select >
    )
}

export default ColorPicker
