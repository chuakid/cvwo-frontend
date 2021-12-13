import React, { useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from '../../store/typedHooks';

const ProjectComponent = () => {
    let params = useParams()
    const navigate = useNavigate();
    let id: number = params.projectId ? parseInt(params.projectId) : -1

    //Get project
    const project = useAppSelector(state => state.projects.find((x) => x.id === id))
    useEffect(() => {
        if (!project) {
            navigate("/");
        }
    }, [project, navigate])


    return (
        <div>
            {project?.name}
        </div>
    )
}

export default ProjectComponent
