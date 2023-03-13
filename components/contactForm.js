import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const ContactForm = ({ isSideNav }) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [postcode, setPostcode] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    
    const data = {
      from_name: name,
      email: email,
      postcode: postcode,
      message: message 
    }

    emailjs
      .send(
        'service_k6o647c',
        'PDPL_contact_us_1',
        data,
        'u9piNsG9-sHtI_RWZ'
      )
      .then(
        (result) => {
          alert('Message sent! Thanks for contacting The Pool Dude.')
        },
        (error) => {
          alert(error.text)
        }
      )

  }

  return (
    <div className={isSideNav ? 'contact-form-side' : 'contact-form-fullpg'}>
      <h1 className="page-heading1">Contact Us!</h1>
      <form onSubmit={sendEmail}>
        <ul>
          <li>
            <input 
              type="text" 
              name='name' 
              placeholder='Name' 
              required  
              onChange={(e) => {setName(e.target.value)}}
            />
          </li>
          <li>
            <input
              type="email" 
              name='email' 
              placeholder='Email' 
              required 
              onChange={(e) => {setEmail(e.target.value)}} 
            />
          </li>
          <li>
            <input 
              type="number" 
              name='postcode' 
              placeholder='Postcode' 
              min={3000}
              max={3999}
              required  
              onChange={(e) => {setPostcode(e.target.value)}}
            />
          </li>
          <li>
            <textarea 
              name='message' 
              placeholder='Message' 
              required  
              onChange={(e) => {setMessage(e.target.value)}}
            />
          </li>
          <li>
            <input 
              className={isSideNav ? 'button-side' : 'button-fullpg'}
              type="submit" 
              value='SEND'  
            />
          </li>
        </ul>
      </form>
    </div>
  )
}

export default ContactForm