import { Input, useColorModeValue } from '@chakra-ui/react'
import React, { FormEventHandler } from 'react'

interface FormData {
    fn?: FormEventHandler,
    type?: string,
    name?: string
}

const FormInput = (data: FormData) => {
    const hoverBg = useColorModeValue('gray.200', 'gray.600');
    const bg = useColorModeValue('gray.100', 'gray.700');

    return (
        <>
            <Input type={data.type} onInput={data.fn} isRequired _hover={{ bgColor: hoverBg }} bgColor={bg} borderColor="gray.300" rounded="md" />
        </>

    )
}

export default FormInput
