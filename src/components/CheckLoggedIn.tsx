import { useToast } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const CheckLoggedIn = ({ children, isLoggedIn }: { children: React.ReactNode, isLoggedIn: boolean }) => {
    const navigate = useNavigate()
    let toast = useToast()
    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login")
            toast({ "title": "Please log in" })
        }
    }, [isLoggedIn, navigate, toast])

    return <>{isLoggedIn ? children : null}</>
}

export default CheckLoggedIn
