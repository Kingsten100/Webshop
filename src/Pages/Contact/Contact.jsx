import React from 'react'
import { useState } from 'react'

const Contact = () => {

  const [formData, setformData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [formErrors, setFormErrors] = useState({})
  const [messageSent, setMessageSent] = useState('')

  const handleChange = (e) => {
    setformData(data => ({...data, [e.target.id]: e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!validate()) return

    try{
      const res = await fetch('https://js2-ecommerce-api.vercel.app/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
        },
        body: JSON.stringify(formData),
      })
      if(res.ok){
        setMessageSent('Meddelandet har skickats')
        setformData({name: '', email: '', message: ''})
      } else{
        setMessageSent('Ett fel har inträffat. Försök igen')
      }
    } catch(error){
      console.error(error)
      setMessageSent('Ett fel har inträffat. Försök igen')
    }

    
    console.log(formData)
  }
  

  const validate = () => {

    const errors = {}

    if(formData.name.trim() === ''){
     errors.name = 'Du behöver fylla i ditt namn'
     setMessageSent('')
    }


    if(formData.email.trim() === ''){
      errors.email = 'Du behöver fylla i din email'
      setMessageSent('')
    }

    if(formData.message.trim() === '') {
      errors.message = 'Du behöver skriva ett meddelande'
      setMessageSent('')
    }

    setFormErrors(errors)

    return Object.keys(errors).length <= 0
    
  }
 


  return (
    <div className='contact-page'>
      <div>
        <h1>Har du en fråga?</h1>
        <p>Kontakta oss</p>
      </div>

      <div className='form-container'>
      <form className='form-group' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">First Name</label>
          <input className='form-input' id='name' type="text" value={formData.name} onChange={handleChange} />
          { formErrors.name && <p className='error'>{formErrors.name }</p> }
        </div>
        
        <div>
          <label htmlFor="email">Email</label>
          <input className='form-input' id='email' type="email" value={formData.email} onChange={handleChange} />
          { formErrors.email && <p className='error'>{formErrors.email }</p> }
        </div>
        
        <div>
          <label htmlFor="message">Message</label>
          <input className='form-input' id='message' type="text" value={formData.message} onChange={handleChange} />
          { formErrors.message && <p className='error'>{formErrors.message }</p> }
        </div>

        <button className='form-btn'>Skicka</button>
        {!!messageSent && <p>{messageSent}</p>}
        
      </form>
      </div>
      
    </div>
  )
}

export default Contact
