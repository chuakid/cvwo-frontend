import { Center, Flex, Spinner, Wrap, WrapItem } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { getProject } from '../../../services/projectservices';
import { editProject } from '../../../store/projectSlice';
import { useAppDispatch, useAppSelector } from '../../../store/typedHooks';
import CreateTaskInput from './CreateTaskInput';
import DeleteProjectButton from './DeleteProjectButton';
import NoTasksComponent from './NoTasksComponent';
import TaskComponent from './TaskComponent';
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
    const sortedTasks = project?.tasks?.map(x => x)
        .sort((a, b) => { return a.completed && b.completed ? 0 : a.completed ? 1 : -1 }) || []

    const curUser = useAppSelector(state => state.user.username)
    const isOwner = project?.users?.find((x) => x.username === curUser)?.role === 1

    return (
        <Flex flexDirection="column" flex="1" p="3">
            <Flex justifyContent="space-between" gap="2">
                <CreateTaskInput projectid={project ? project.id : -1} />
                <Flex gap="2">
                    <UsersComponent isOwner={isOwner} project={project} />
                    {isOwner && <DeleteProjectButton id={project?.id} />}
                </Flex>

            </Flex>
            {loading ? <Center flex="1" fontSize="4xl"><Spinner mr="2" size="xl" />Loading</Center> :
                sortedTasks?.length > 0 ?
                    <Wrap mt="2">
                        {sortedTasks?.map((task) => <WrapItem key={task.id}><TaskComponent task={task}></TaskComponent></WrapItem>)}
                    </Wrap>
                    : <NoTasksComponent />
            }
        </Flex>
    )
}

export default ProjectComponent
