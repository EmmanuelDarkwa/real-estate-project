import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../Css/Login.css"
import { auth, } from '../firebase/firebase';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate('');


    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigate("/")
                // Signed in 

                // ...
            })
            .catch((error) => {
                console.log(error);
            });

    }



    return (
        <div className="holder">
            <h1>SIGN IN</h1>
            <form className='form' onSubmit={signIn}>

                <div className="input-container">
                    <label>Username </label>
                    <input type="email" value={email} name="uname" onChange={(e) => setEmail(e.target.value)} className='enter' required />
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" value={password} name="pass" onChange={(e) => setPassword(e.target.value)} className='enter' required />
                </div>
                <p>New user? <Link className='hover:text-violet-900 transtion' to="/registeruserinfo">Create an account</Link></p>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}

export default Login