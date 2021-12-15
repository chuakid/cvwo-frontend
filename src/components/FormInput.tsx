import { Input, useColorModeValue } from '@chakra-ui/react'
import React, { FormEventHandler } from 'react'

interface FormData {
    fn?: FormEventHandler,
    type?: string,
    name?: string
}

const FormInput = (data: FormData) => {
    const styles = useColorModeValue({
        hoverBg: "gray.200",
        bg: 'gray.100',
        borderColor: "gray.300"
    }, {
        hoverBg: "gray.500",
        bg: "gray.600",
        borderColor: "gray.400"
    })

    return (
        <>
            <Input type={data.type} onInput={data.fn} isRequired _hover={{ bgColor: styles.hoverBg }} bgColor={styles.bg} borderColor={styles.borderColor} rounded="md" />
        </>

    )
}

export default FormInput
