import { Center, Flex, Spinner } from '@chakra-ui/react'
import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { getProjects } from '../../services/projectservices'
import { getAllTasks } from '../../services/taskservices'
import { setAllTasks, setProjects } from '../../store/projectSlice'
import { useAppDispatch } from '../../store/typedHooks'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'

const HomeComponent = () => {
    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const controller = new AbortController()
        getProjects(controller.signal)
            .then((result) => {
                dispatch(setProjects(result.data))
            })
            .then(() => getAllTasks(controller.signal))
            .then((result) => {
                dispatch(setAllTasks(result.data))
            }).catch((error: AxiosError) => {
                console.log(error);
            }).finally(() => setLoading(false))
        return () => {
            controller.abort()
        }
    }, [dispatch])

    return (
        <>{loading ? <Center h="100vh"><Spinner size='xl' /></Center>
            : <Flex flexDirection="column" minH="100vh">
                <Navbar />
                <Flex flex="1">
                    <Sidebar></Sidebar>
                    <Outlet />
                </Flex>
            </Flex>}</>

    )
}

export default HomeComponent
