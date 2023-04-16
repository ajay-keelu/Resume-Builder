import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <h2 className='contactText'>CONTACT US</h2>
      <div className='contact-input'>
          <div className='contact-div'>
            <input type='text' placeholder='USER NAME' className='cont-spac' />
            <span className='contact-span'>USER NAME</span>
          </div>
          <div className='contact-div'>
            <input type='email' placeholder='EMAIL' className='cont-spac' />
            <span className='contact-span'>EMAIL</span>
          </div>
          <div className='contact-div'>
            <input type='text' placeholder='CONTACT NUMBER' className='cont-spac' />
            <span className='contact-span'>CONTACT NUMBER</span>
          </div>
          <div className='contact-div'>
            <textarea type='text' placeholder='HAVE A QUESTION' className='cont-spac texta'  />
            <span className='contact-span'>HAVE A QUESTION</span>
          </div>
          <div className='contact-div'>
            <button className='contactSubmit'>Submit</button>
          </div>
      </div>
    </div>
  )
}

export default Contact
