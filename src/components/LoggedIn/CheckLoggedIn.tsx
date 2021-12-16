import React, { ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../store/typedHooks'

const CheckLoggedIn = ({ children }: { children: ReactNode }) => {
    const token = useAppSelector(state => state.user.token)
    const navigate = useNavigate()
    useEffect(() => {
        if (token === "") {
            navigate("/login")
        }
    }, [token, navigate])
    return (
        <> {children} </>
    )
}

export default CheckLoggedIn
