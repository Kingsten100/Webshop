import React from 'react'
import { useState } from 'react'
import { useContact } from '../../Contexts/ContactContext'

const Contact = () => {

  const {formData, handleChange, handleSubmit, formErrors, messageSent} = useContact()


  return (
    <div className='contact-page'>

      <div className='form-container'>
      <div className='contact-page-info'>
        <h1>Har du en fråga?</h1>
        <p>Kontakta oss</p>
      </div>
      <form className='form-group' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Ditt namn</label>
          <input className='form-input' id='name' type="text" value={formData.name} onChange={handleChange} />
          { formErrors.name && <p className='error'>{formErrors.name }</p> }
        </div>
         
        <div>
          <label htmlFor="email">Email</label>
          <input className='form-input' id='email' type="email" value={formData.email} onChange={handleChange} />
          { formErrors.email && <p className='error'>{formErrors.email }</p> }
        </div>
        
        <div>
          <label htmlFor="message">Meddelande</label>
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
