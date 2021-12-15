import { Link, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Project from '../../../types/Project'
import { Link as RouterLink, useParams } from "react-router-dom";

const ProjectLink = ({ project }: { project: Project }) => {
    const params = useParams()
    let selectedProjectId: number = params.projectId ? parseInt(params.projectId) : -1
    let selected = selectedProjectId === project.id
    const defaultStyle = {
        fontWeight: selected ? "bold" : "thin",
    }
    const style = useColorModeValue({
        ...defaultStyle,
        bgColor: selected ? "gray.400" : "gray.300",
        color: selected ? "gray.700" : "black"
    }, {
        ...defaultStyle,
        bgColor: selected ? "gray.500" : "gray.600",
        color: selected ? "black" : "white"
    })

    return (
        <Link fontSize="xl" bgColor={style.bgColor} color={style.color} fontWeight={style.fontWeight} boxShadow="md" px="2" rounded="md" w="100%" as={RouterLink} to={"/project/" + project.id}>{project.name}</Link>
    )
}

export default ProjectLink
