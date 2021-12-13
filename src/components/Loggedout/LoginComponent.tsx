import React, { useState } from 'react'
import { Button, Center, Flex, FormControl, FormLabel, Stack, useToast } from "@chakra-ui/react"
import FormInput from '../FormInput';
import { login, register } from '../../services/userservices';

const LoginComponent = () => {
    const formBg = "white"
    const toast = useToast()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)

    function handleLogin() {
        setLoading(true)
        login(username, password)
            .then((result) => {
                setLoading(false)
                console.log(result)
            })
            .catch(error => {
                toast({
                    "title": "Invalid account",
                    "duration": 3000,
                    "status": 'error'
                })
            }).finally(() => {
                setLoading(false)
            })
    }
    function handleRegister() {
        setLoading(true)
        register(username, password)
            .then((result) => {
                setLoading(false)
                console.log(result)
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
                    <FormControl>
                        <FormLabel>Username</FormLabel>
                        <FormInput fn={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <FormInput fn={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} type="password" />
                    </FormControl>
                    <FormControl>
                        <Button disabled={loading} bgColor="blue.200" _hover={{ bgColor: "blue.500" }} onClick={handleLogin} width="100%" marginTop="2">
                            Login</Button>
                        <Button disabled={loading} bgColor="red.200" _hover={{ bgColor: "red.500" }} onClick={handleRegister} width="100%" marginTop="2">Register</Button>
                    </FormControl>

                </Stack>

            </Flex>
        </Center>
    )
}

export default LoginComponent
