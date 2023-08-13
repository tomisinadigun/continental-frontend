import React from 'react'
import Header from '../components/Header'
import Indicator from '../components/Indicator'
import { Link } from 'react-router-dom'
import { checkView } from '../features/authSlice'
import { useDispatch, useSelector } from 'react-redux'

const Signup = () => {

  const isUser = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  
  return (
    <div className='authenticate'>
      {
        !isUser ?
          <div className="sign-up">
            <p className='logo'>CONTINENTAL</p>
            <div className='auth-input'>
              <input type="email" name="email" id="email" placeholder='Email' />
              <input type="password" name="password" id="password" placeholder='Password' />
              <button>Login</button>
            </div>
            <p><span>Don't have an account?</span> <span className='switch-auth' onClick={() => dispatch(checkView())}>Sign up</span></p>
          </div>
        : 
          <div className="sign-up">
            <p className='logo'>CONTINENTAL</p>
            <div className='auth-input'>
              <input type="text" name="name" id="name" placeholder='Name' />
              <input type="email" name="email" id="email" placeholder='Email' />
              <input type="password" name="password" id="password" placeholder='Password' />
              <button>Sign up</button>
            </div>
            <p><span>already have an account?</span> <span className='switch-auth' onClick={() => dispatch(checkView())}>Sign in</span></p>
          </div>

      }
      

      
        
    </div>
  )
}

export default Signup