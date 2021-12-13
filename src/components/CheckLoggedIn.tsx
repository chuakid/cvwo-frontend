import React, { ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../store/typedHooks'

const CheckLoggedIn = ({ children }: { children: ReactNode }) => {
    const jwt = useAppSelector(state => state.jwt)
    const navigate = useNavigate()
    useEffect(() => {
        if (jwt === "") {
            navigate("/login")
        }
    }, [jwt, navigate])
    return (
        <> {children} </>
    )
}

export default CheckLoggedIn
