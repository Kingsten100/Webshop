import React from 'react'

const Contact = () => {
  return (
    <div className='contact-page'>
      <div>
        <h1>Har du en fråga?</h1>
        <p>Kontakta oss</p>
      </div>

      <div className='form-container'>
      <form className='form-group'>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input className='form-input' id='firstName' type="text" />
        </div>
        
        <div>
          <label htmlFor="email">Email</label>
          <input className='form-input' id='email' type="email" />
        </div>
        
        <div>
          <label htmlFor="message">Message</label>
          <input className='form-input' id='message' type="text" />
        </div>

        <button className='form-btn'>Skicka</button>
        
      </form>
      </div>
      
    </div>
  )
}

export default Contact
