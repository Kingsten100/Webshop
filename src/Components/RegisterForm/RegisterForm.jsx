import React, { useState } from 'react'
import { useAuth } from '../../Contexts/AuthContext'
import { Link } from 'react-router'

const RegisterForm = () => {

    const { register } = useAuth()

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        repeatPassword: ''
    })
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const onChange = e => {
        setFormData(values => ({
            ...values,
            [e.target.id]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(formData.password !== formData.repeatPassword){
            setError('Lösenorden matchar inte')
            return
        }

        const { error, success } = await register({
            email: formData.email,
            password: formData.password
        })

        if(error){
            setError(error)
        }
        if(success){
            setSuccess(success)
        }
    }




  return (
    <div className='register-container'>
      <form onSubmit={handleSubmit}>
        <div className='form-style'>
            <label htmlFor="email">Email</label>
            <input value={formData.email} onChange={onChange} type="email" id='email'/>
        </div>
        <div className='form-style'>
            <label htmlFor="password">Password</label>
            <input value={formData.password} onChange={onChange} type="password" id='password' />
        </div>
        <div className='form-style'>
            <label htmlFor="repeatPassword">Repeat password</label>
            <input value={formData.repeatPassword} onChange={onChange} type="password" id='repeatPassword'/>
        </div>
        { error && <p>{error}</p>}
        {success && <p>{success}</p>}
        <button className='register-btn'>Registrera</button>
      </form>
      <div className='login-redirect'>
        <p>
            Redan medlem? 
            <Link to='/login'>Logga in här</Link>

        </p>
      </div>
    </div>
  )
}

export default RegisterForm
