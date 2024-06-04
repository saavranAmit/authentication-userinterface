import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { BsPersonFill } from 'react-icons/bs'
import { IoMdMail } from 'react-icons/io'
import { PiFalloutShelter, PiLockFill, PiLockLight } from 'react-icons/pi'
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth'

function SignUp() {
    const [username, setUserName] = useState("")
    const [email, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [con_password, setConPass] = useState("")
    const [flash, setFlash] = useState(false)

    const history = useNavigate()


    const signUp = async (e) => {
        e.preventDefault()
        try {
            if (password === con_password) {
                await createUserWithEmailAndPassword(auth, email, password);
                console.log("Account created")

                setMail("")
                setConPass("")
                setPassword("")
                setUserName("")
                // setFlash(true)
                history("/login")
            } else {
                console.log("Password does not match")
            }
        } catch (err) {
            console.log(err)
            setFlash(true)
        }
    }
    return (
        <div className='auth-container'>
            {flash ? <h2>Register unsuccessfull. Try again.</h2>
                : null}
            <div className='signUp'>
                <div className='form register'>
                    <form className='form-data' onSubmit={signUp}>
                        <h1>Sign Up</h1>
                        <div><BsPersonFill className='icons' /><input type='text' value={username} onChange={(e) => setUserName(e.target.value)} placeholder='Username' required /></div>
                        <div><IoMdMail className='icons' /><input type='email' value={email} onChange={(e) => setMail(e.target.value)} placeholder='Email' required /></div>
                        <div><PiLockFill className='icons' /><input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required /></div>
                        <div><PiLockLight className='icons' /><input type='password' value={con_password} onChange={(e) => setConPass(e.target.value)} placeholder='Repeat your password' required /></div>

                        <input className='btn' type='submit' value='Register' />
                    </form>
                </div>
                <div className='form-image register'>
                    <img src='/images/signUp.jpg' alt='' />
                    <NavLink to="/login">I am already a member</NavLink>
                </div>
            </div>
        </div>
    )
}

export default SignUp