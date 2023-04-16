import React from 'react'

const Signup = () => {
  return (
        <div className='signup'>
          <h2 className='signText'>SIGN IN</h2>
            <div className='signup-input'>
                <div className='signup-div'>
                  <input type='text' placeholder='Email' className='cont-spac' />
                  <span className='signup-span'>EMAIL</span>
                </div>
                <div className='signup-div'>
                  <input type='password' placeholder='Password' className='cont-spac' />
                  <span className='signup-span'>PASSWORD</span>
                </div>
                
                <div className='signup-div'>
                  <button className='signupSubmit'>Submit</button>
                </div>
            </div>
        </div>
  )
}

export default Signup

