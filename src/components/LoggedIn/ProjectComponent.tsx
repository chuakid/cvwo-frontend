import React from 'react'
import { useParams } from "react-router-dom";
import { useAppSelector } from '../../store/typedHooks';

const ProjectComponent = () => {
    let params = useParams()
    let id: number;
    if (params.projectId !== undefined) {
        id = parseInt(params.projectId)
    }
    //Get project
    const project = useAppSelector(state => state.projects.find((x) => x.id === id))
    return (
        <div>
            {project?.name}
        </div>
    )
}

export default ProjectComponent
