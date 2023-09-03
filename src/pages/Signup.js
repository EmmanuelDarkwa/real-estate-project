import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { useDispatch } from "react-redux"
import { creatingNewUser } from '../slice/usersSlice';
import { useSelector } from "react-redux";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase"


const Signup = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [userinfo, setUserinfo] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate('');
    const dispatch = useDispatch();
    const state = useSelector((state) => {
        return state.userReducer;
    });
    const userstate = state.user;
    const location = useLocation();
    const newInfo = location.state?.newInfo || {};

    const signUpp = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const usersId = userCredential.user.uid;
            const newInfo = {
                email,
                userId: usersId,
                fname,
                lname,
                userinfo
            };
            dispatch(creatingNewUser(newInfo));
            navigate("/");
        } catch (error) {
            console.error(error);
        }

        try {
            const docRef = await addDoc(collection(db, "userInfo"), {
                userInfo: userstate,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        setEmail("");
        setPassword("");

    };

    return (
        <div className="holder">
            <h3>REGISTRATION</h3>
            <form className='form' onSubmit={signUpp}>
                <div className="input-container">
                    <label>First Name </label>
                    <input type="text" value={fname} name="fname" onChange={(e) => setFname(e.target.value)} className='enter' required />
                </div>
                <div className="input-container">
                    <label>Last Name </label>
                    <input type="text" value={lname} name="fname" onChange={(e) => setLname(e.target.value)} className='enter' required />
                </div>
                <div className="input-container">
                    <label >User Type:</label>
                    <select onChange={(e) => setUserinfo(e.target.value)} value={userinfo} required>
                        <option value="" disabled defaultValue >What type of user are you?</option>
                        <option value="tenant">Tenant</option>
                        <option value="owner">Owner</option>
                    </select>
                </div>
                <div className="input-container">
                    <label>Email </label>
                    <input type="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} className='enter' required />
                </div>
                <div className="input-container">
                    <label>Password {newInfo.fname} </label>
                    <input type="password" value={password} name="pass" onChange={(e) => setPassword(e.target.value)} className='enter' required />
                </div>
                <p>Have an account? <Link className='hover:text-violet-900 transtion' to="/login">Sign In</Link></p>
                <div className="button-container">
                    <input type="submit" value="SIGN UP" />
                </div>


            </form>
        </div>
    )
}


export default Signup