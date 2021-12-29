import { Center, Flex, Select, Spinner, useColorModeValue, Wrap, WrapItem } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { getProject } from '../../../services/projectservices';
import { editProject } from '../../../store/projectSlice';
import { useAppDispatch, useAppSelector } from '../../../store/typedHooks';
import CreateTaskInput from './Task/CreateTaskInput';
import DeleteProjectButton from './DeleteProjectButton';
import NoTasksComponent from './NoTasksComponent';
import TaskComponent from './Task/TaskComponent';
import UsersComponent from './Users/UsersComponent';

const ProjectComponent = () => {

    let params = useParams()
    const navigate = useNavigate();
    let id: number = params.projectId ? parseInt(params.projectId) : -1
    const [loading, setLoading] = useState(true)
    const dispatch = useAppDispatch()
    //Get updated project
    useEffect(() => {
        setLoading(true)
        getProject(id).then(result => {
            dispatch(editProject(result.data))
            setLoading(false)
        }).catch(e => navigate("/"))
    }, [navigate, dispatch, id])
    const project = useAppSelector(state => state.projects[id])
    //Sort tasks, completed last
    let sortedTasks = project?.tasks?.map(x => x)
        .sort((a, b) => { return a.completed && b.completed ? 0 : a.completed ? 1 : -1 }) || []

    const [filter, setFilter] = useState(-1)
    if (filter > 0) {
        sortedTasks = sortedTasks.filter(x => x.color === filter)
    }


    const curUser = useAppSelector(state => state.user.username)
    const isOwner = project?.users?.find((x) => x.username === curUser)?.role === 1

    const taskColors = useColorModeValue({
        "1": "gray.300",
        "2": "blue.300",
        "3": "red.300"
    }, {
        "1": "gray.700",
        "2": "blue.700",
        "3": "red.700"
    }) as { [key: string]: string }

    return (
        <Flex flexDirection="column" flex="1" p="3">
            <Flex justifyContent="space-between" gap="2">
                <CreateTaskInput projectid={project ? project.id : -1} />
                <Select placeholder="Show all" onInput={e => setFilter(parseInt(e.currentTarget.value))}>
                    {Object.keys(taskColors).map(x => <option value={x}>Show {taskColors[x].split(".")[0]}</option>
                    )}
                </Select>
                <Flex gap="2">
                    <UsersComponent isOwner={isOwner} project={project} />
                    {isOwner && <DeleteProjectButton id={project?.id} />}
                </Flex>

            </Flex>
            {loading ? <Center flex="1" fontSize="4xl"><Spinner mr="2" size="xl" />Loading</Center> :
                sortedTasks?.length > 0 ?
                    <Wrap mt="2">
                        {sortedTasks?.map((task) => <WrapItem key={task.id}><TaskComponent taskcolors={taskColors} task={task}></TaskComponent></WrapItem>)}
                    </Wrap>
                    : <NoTasksComponent />
            }
        </Flex>
    )
}

export default ProjectComponent
