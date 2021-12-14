import { Box, Center, Input } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from '../../../store/typedHooks';
import CreateTaskInput from './CreateTaskInput';
import TaskComponent from './TaskComponent';

const ProjectComponent = () => {
    let params = useParams()
    const navigate = useNavigate();
    let id: number = params.projectId ? parseInt(params.projectId) : -1

    //Get project
    const project = useAppSelector(state => state.projects[id])
    useEffect(() => {
        if (!project) {
            navigate("/");
        }
    }, [project, navigate])


    return (
        <Box>
            <CreateTaskInput projectid={project ? project.id : -1} />
            {project?.Tasks?.map((task) => <TaskComponent key={task.id} task={task}></TaskComponent>)}
        </Box>
    )
}

export default ProjectComponent
