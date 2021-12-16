import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/typedHooks';

export default function useCheckLoggedOut() {
    const navigate = useNavigate();
    const token = useAppSelector(state => state.user.token)
    useEffect(() => {
        if (token !== "") {
            navigate("/")
        }
    }, [token, navigate])
}

