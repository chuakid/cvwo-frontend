import { Link } from '@chakra-ui/react'
import React from 'react'
import Project from '../../../types/Project'
import { Link as RouterLink, useParams } from "react-router-dom";

const ProjectLink = ({ project }: { project: Project }) => {
    const params = useParams()
    let selectedProjectId: number = params.projectId ? parseInt(params.projectId) : -1

    return (
        <Link fontSize="xl" bgColor={selectedProjectId === project.id ? "blue.700" : "transparent"} px="2" rounded="md" color="white" fontWeight={selectedProjectId === project.id ? "bold" : "thin"} w="100%" as={RouterLink} to={"/project/" + project.id}>{project.name}</Link>
    )
}

export default ProjectLink
