import React, { useState } from 'react'
import './SignIn.css'


function SignIn() {

     
      
 
  return (
    <>
    
      <div className='login-div-body'>
        <div id='login-div-container'>
            <h2>Please SignIn</h2>
            <form>
                {/* <div className='form-control'>
                    <input type='text' required autoComplete='off' />
                    <label>Your Full Name</label>
                </div> */}
                <div className='form-control'>
                    <input type='email' required autoComplete='off'/>
                    <label htmlFor='email'>Email</label>
                </div>
                {/* <div className='form-control'>
                    <input type='text' required autoComplete='off'/>
                    <label>Your ID</label>
                
                </div> */}

                <div className='form-control'>
                    <input type='password' autoComplete='off' required/>
                    <label htmlFor='password'>Password</label>
                </div>
               
                <div className='form-control'>
                    <input type='password' autoComplete='off'required/>
                    <label htmlFor='password'>Confirm Password</label>
                </div>
               
    
                <button type='submit' className='btn'>SignIn</button>
        
                <p className='text'>Dont have an account?
                 <a href='/register'>Register</a>
                </p>
            </form>
       
            
        </div>
        </div>
    </>
  )
}

export default SignIn