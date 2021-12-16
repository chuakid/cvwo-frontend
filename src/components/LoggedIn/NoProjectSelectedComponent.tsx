import { Box, Heading } from '@chakra-ui/react'
import { useAppSelector } from '../../store/typedHooks'

const NoProjectSelectedComponent = () => {
    const username = useAppSelector(state => state.user.username)
    return (
        <Box flex="1" p="3" overflowY="auto">
            <Heading>Welcome {username}!</Heading>
            Start by creating a project on the left!
        </Box>
    )
}

export default NoProjectSelectedComponent
