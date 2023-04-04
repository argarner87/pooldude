import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const ContactForm = ({ isSideNav }) => {

  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ postcode, setPostcode ] = useState('')
  const [ message, setMessage ] = useState('')
  const [ submitted, setSubmitted ] = useState(false)

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
    <div className={isSideNav ? "contact-form-side" : "contact-form-fullpg"}>
      <form onSubmit={sendEmail}>
        <ul>
          <li>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </li>
          <li>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </li>
          <li>
            <label>Postcode:</label>
            <input
              type="number"
              name="postcode"
              min={3000}
              max={3999}
              required
              onChange={(e) => {
                setPostcode(e.target.value);
              }}
            />
          </li>
          <li>
            <label>Message:</label>
            <textarea
              name="message"
              required
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </li>
          <li>
            <input className="button-side" type="submit" value="Send" />
          </li>
        </ul>
      </form>
    </div>
  );
}

export default ContactForm