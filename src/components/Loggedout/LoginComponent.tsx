import React, { useState } from 'react'
import { Button, Center, Flex, FormControl, FormLabel, Link, Stack, useColorModeValue, useToast } from "@chakra-ui/react"
import FormInput from '../FormInput';
import { login } from '../../services/userservices';
import { useAppDispatch } from '../../store/typedHooks';
import { Link as RouterLink } from 'react-router-dom';
import useCheckLoggedOut from './CheckLoggedOut';
import { setAppToken, setAppUsername } from '../../helpers/userhelpers';

const LoginComponent = () => {
    const styles = useColorModeValue({ formBg: "gray.100", borderColor:"gray.300" }, { formBg: "gray.700", borderColor:"gray.700" })
    const toast = useToast()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)
    const dispatch = useAppDispatch()
    useCheckLoggedOut();

    function handleLogin() {
        if (username === "" || password === "") {
            toast({
                "title": "Please enter a username and a password",
                "duration": 3000,
                "status": 'warning'
            })
            return
        }

        setLoading(true)
        login(username, password)
            .then((result) => {
                setLoading(false)
                setAppToken(result.data)
                setAppUsername(username)
            })
            .catch(error => {
                toast({
                    "title": "Invalid account",
                    "duration": 3000,
                    "status": 'error'
                })
                setLoading(false)

            })
    }


    return (
        <Center h="100vh">
            <Flex as="form" background={styles.formBg} rounded="md" padding="5" boxShadow="lg" border="1px" borderColor={styles.borderColor}>
                <Stack>
                    <FormControl required>
                        <FormLabel>Username</FormLabel>
                        <FormInput fn={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <FormInput fn={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} type="password" />
                    </FormControl>
                    <FormControl required>
                        <Button isLoading={loading} bgColor="blue.400" _hover={{ bgColor: "blue.500", color: "white" }} onClick={handleLogin} width="100%" marginTop="2">
                            Login</Button>
                        <Link as={RouterLink} color="blue.400" rounded="md" p="2" mt="2" display="inline-block" to="/register" marginTop="2"> Register</Link>
                    </FormControl>

                </Stack>

            </Flex>
        </Center>
    )
}

export default LoginComponent
