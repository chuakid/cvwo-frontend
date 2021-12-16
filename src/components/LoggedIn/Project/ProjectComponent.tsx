import { Box, Flex, Wrap, WrapItem } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { getProject } from '../../../services/projectservices';
import { editProject } from '../../../store/projectSlice';
import { useAppDispatch, useAppSelector } from '../../../store/typedHooks';
import CreateTaskInput from './CreateTaskInput';
import DeleteProjectButton from './DeleteProjectButton';
import TaskComponent from './TaskComponent';

const ProjectComponent = () => {

    let params = useParams()
    const navigate = useNavigate();
    let id: number = params.projectId ? parseInt(params.projectId) : -1
    const dispatch = useAppDispatch()
    //Get updated project
    useEffect(() => {
        getProject(id).then(result => {
            dispatch(editProject(result.data))
        }).catch(e => navigate("/"))
    }, [navigate, dispatch, id])
    const project = useAppSelector(state => state.projects[id])
    //Sort tasks, completed last
    const sortedTasks = project?.tasks?.map(x => x)
        .sort((a, b) => { return a.completed && b.completed ? 0 : a.completed ? 1 : -1 })

    return ( 
        <Box flex="1" p="3">
            <Flex gap="2">
                <CreateTaskInput projectid={project ? project.id : -1} />
                <DeleteProjectButton id={project?.id} />
            </Flex>
            <Wrap mt="2">
                {sortedTasks?.map((task) => <WrapItem key={task.id}><TaskComponent task={task}></TaskComponent></WrapItem>)}
            </Wrap>
        </Box>
    )
}

export default ProjectComponent
