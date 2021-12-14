import { Button, Center, Flex, FormControl, FormLabel, Link, Stack, useToast } from '@chakra-ui/react'
import { Link as RouterLink } from "react-router-dom"
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../../services/userservices'
import FormInput from '../FormInput'
import useCheckLoggedOut from './CheckLoggedOut'

const RegisterComponent = () => {
    const formBg = "white"
    const toast = useToast()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    useCheckLoggedOut();

    function handleRegister() {
        if (username === "" || password === "") {
            toast({
                "title": "Please enter a username and a password",
                "duration": 3000,
                "status": 'warning'
            })
            return
        }
        setLoading(true)
        register(username, password)
            .then((result) => {
                setLoading(false)
                navigate("/login")
                toast({
                    "title": "Registration successful, please log in.",
                    "duration": 3000,
                    "status": 'success'
                })
            })
            .catch(error => {
                toast({
                    "title": "Username taken",
                    "duration": 3000,
                    "status": 'error'
                })
            }).finally(() => {
                setLoading(false)
            })
    }
    return (
        <Center h="100vh">
            <Flex as="form" rounded="md" padding="5" backgroundColor={formBg} boxShadow="lg" border="1px" borderColor="gray.200">
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
                        <Button isLoading={loading} bgColor="red.200" _hover={{ bgColor: "red.500", color: "white" }} onClick={handleRegister} width="100%" marginTop="2">
                            Register</Button>
                        <Link as={RouterLink} color="blue.500" rounded="md" p="2" mt="2" display="inline-block" to="/login" marginTop="2"> Login</Link>
                    </FormControl>
                </Stack>
            </Flex>
        </Center>)
}

export default RegisterComponent
