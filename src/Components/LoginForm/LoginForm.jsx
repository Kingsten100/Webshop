import React, {useState} from 'react'
import {Link} from 'react-router'
import { useAuth } from '../../Contexts/AuthContext'

const LoginForm = () => {

    const { login } = useAuth()
    
        const [formData, setFormData] = useState({
            email: '',
            password: ''
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
    
            const { error, success } = await login(formData)
    
            if(error){
                setError(error)
            }
            if(success){
                setSuccess(success)
            }
        }


  return (
    <div className='login-container'>
        <form onSubmit={handleSubmit}>
        <div className='form-style'>
            <label htmlFor="email">Email</label>
            <input value={formData.email} onChange={onChange}  type="email" id='email'/>
        </div>
        <div className='form-style'>
            <label htmlFor="password">Password</label>
            <input value={formData.password} onChange={onChange} type="password" id='password' />
        </div>
        { error && <p>{ error }</p>}
        { success && <p>{ success }</p>}
        
        
        <button className='register-btn'>Logga in</button>
        </form>
        <div className='login-redirect'>
        <p>
            Inte medlem? 
            <Link to='/register'>Registrera dig här</Link>

        </p>
        </div>
  </div>
  )
}

export default LoginForm
