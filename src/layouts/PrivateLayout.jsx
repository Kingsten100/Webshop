import React, { useEffect} from 'react'
import { Outlet, useNavigate } from 'react-router'
import { useAuth } from '../Contexts/AuthContext'

const PrivateLayout = () => {

    const { token } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if(!token) {
            navigate('/login', {replace: true})
        }
    }, [token, navigate])
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default PrivateLayout
    