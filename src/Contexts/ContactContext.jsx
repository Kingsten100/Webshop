import React, { createContext, useContext, useState } from 'react'

export const  ContactContext = createContext()

export const useContact = () => {
    const context = useContext(ContactContext);
    if (!context) throw new Error("useContact måste användas inom en ContactProvider");
    return context;
}



export const ContactContextProvider = ({ children }) => {

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
    <ContactContext.Provider value={{ formData, handleChange, handleSubmit, formErrors, messageSent}}>
        { children }
    </ContactContext.Provider>
  )
}

export default ContactContext
