import React from 'react'
import { useAuth } from '../../Contexts/AuthContext'

const PrivatePage = () => {

    const { logout } = useAuth()
  return (
    <div>
      <h1>Den här sidan är privat</h1>
      <button onClick={logout}>Logga ut</button>
    </div>
  )
}

export default PrivatePage
