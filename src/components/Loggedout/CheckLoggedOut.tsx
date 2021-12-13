import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/typedHooks';

export default function useCheckLoggedOut() {
    const navigate = useNavigate();
    const jwt = useAppSelector(state => state.jwt)
    useEffect(() => {
        if (jwt !== "") {
            navigate("/")
        }
    }, [jwt, navigate])
}

