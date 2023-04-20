import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate();
  return (
    <div className="header" >
        <div className="logo" onClick={()=>{
            navigate('/')
        }}>
            <h2>Resume Builder</h2>
        </div>
        <div className="navbar" >
            <Link className="links" to='/signup'>Sign Up</Link>
            <Link className="links" to='/contact'>Contact us</Link>
        </div>
    </div>
  )
}

export default Header