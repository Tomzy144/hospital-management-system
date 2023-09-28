import {React, useState} from 'react'
import "./Register.css"
function Register() {



   
  return (
    <>
    <div className='signup-div-body'>
        <div id='signup-div-container'>
            <h2>Please Signup</h2>
            <form> 
                <div className='form-control'>
                    <input type='text' required autoComplete='off' id="inputField" />
                    <label>Your Full Name</label>
                 
                </div>
                <div className='form-control'>
                    <input type='email' required autoComplete='off' />
                    <label htmlFor='email'>Email</label>
                </div>
                <div className='form-control'>
                    <input type='text' required autoComplete='off'/>
                    <label>Doctors ID</label>
                
                </div>

                <div className='form-control'>
                    <input type='password' autoComplete='off' required/>
                    <label htmlFor='password'>Password</label>
                </div>
               
                <div className='form-control'>
                    <input type='password' autoComplete='off'required/>
                    <label htmlFor='password'>Confirm Password</label>
                </div>
               
    
                <button type='submit' className='btn'>SignUp</button>
        
                <p className='text'>Already have an account?
                 <a href='/'>SignIn</a>
                </p>
            </form>
               
        </div>
        </div>
    </>
  )
}

export default Register