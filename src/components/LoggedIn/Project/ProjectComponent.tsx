import { Box, Wrap, WrapItem } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from '../../../store/typedHooks';
import Project from '../../../types/Project';
import CreateTaskInput from './CreateTaskInput';
import TaskComponent from './TaskComponent';

const ProjectComponent = () => {
    let params = useParams()
    const navigate = useNavigate();
    let id: number = params.projectId ? parseInt(params.projectId) : -1

    //Get project
    const project: Project = useAppSelector(state => state.projects[id])
    useEffect(() => {
        if (!project) {
            navigate("/");
        }
    }, [project, navigate])


    return (
        <Box flex="1" p="3">
            <CreateTaskInput projectid={project ? project.id : -1} />
            <Wrap mt="2">
                {project?.Tasks?.map((task) => <WrapItem key={task.id}><TaskComponent task={task}></TaskComponent></WrapItem>)}
            </Wrap>
        </Box>
    )
}

export default ProjectComponent
