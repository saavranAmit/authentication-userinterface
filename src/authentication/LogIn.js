import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoMdMail } from 'react-icons/io'
import { PiLockFill, PiLockLight } from 'react-icons/pi'
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from 'firebase/auth'

function LogIn({ setauthPages }) {
    const [email, setMail] = useState("")
    const [password, setPassword] = useState("")


    const submitForm = async (e) => {
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("LogIn Successfully")
            setMail("")
            setPassword("")
            setauthPages(false)
        } catch (err) {
            console.log(err)
        }

    }
    return (
        <div className='auth-container'>
            <div className='signUp'>
                <div className='form-image register'>
                    <img src='/images/login.jpg' alt='' />
                    <NavLink to="/">Create an account</NavLink>
                </div>
                <div className='form register login'>
                    <form className='form-data' onSubmit={submitForm}>
                        <h1>Sign In</h1>
                        <div><IoMdMail className='icons' /><input type='email' value={email} onChange={(e) => setMail(e.target.value)} placeholder='Email' required /></div>
                        <div><PiLockFill className='icons' /><input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required /></div>
                        <input className='btn' type='submit' value='Log in' />
                    </form>
                    <div className='login-logo'>
                        <p>Or login with</p>
                        <div className='facebook logo'>
                            <img src='/images/faceboot-color.png' alt=''></img>
                        </div>
                        <div className='google logo'>
                            <img src='/images/linkedin.png' alt=''></img>
                        </div>
                        <div className='twitter logo'>
                            <img src='/images/twitter-color.png' alt=''></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LogIn