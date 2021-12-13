import React, { useState } from 'react'
import { Button, Center, Flex, FormControl, FormLabel, Stack, useToast } from "@chakra-ui/react"
import FormInput from '../FormInput';
import { login } from '../../services/userservices';

const LoginComponent = () => {
    const formBg = "white"
    const toast = useToast()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    function handleLogin() {
        login(username, password)
            .then((result) => { console.log(result) })
            .catch(error => {
                toast({
                    "title": "Invalid account",
                    "duration": 3000,
                    "status": 'error'
                })
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
                    <Button bgColor="blue.200" _hover={{ bgColor: "blue.500" }} onClick={handleLogin} width="100%" marginTop="2">Login</Button>

                </Stack>

            </Flex>
        </Center>
    )
}

export default LoginComponent
