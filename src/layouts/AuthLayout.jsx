import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { useAuth } from '../Contexts/AuthContext'

const AuthLayout = () => {

    const { token } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if(token) {
            navigate('/profile')
        }
    }, [token])
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default AuthLayout
