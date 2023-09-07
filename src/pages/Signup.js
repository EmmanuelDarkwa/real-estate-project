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
        <div className="flex justify-center items-center h-full bg-gray-800">
            
            <form className="max-w-[400px] w-full mx-auto bg-white p-8 mt-2 mb-2" onSubmit={signUpp}>
            <h3 className='text-4xl font-bold text-center py-4 text-violet-500'>REGISTRATION</h3>
                <div className="flex flex-col mb-4">
                    <label>First Name </label>
                    <input type="text" value={fname} name="fname" onChange={(e) => setFname(e.target.value)} className='border relative bg-gray-100 p-2' required />
                </div>
                <div className="flex flex-col mb-4">
                    <label>Last Name </label>
                    <input type="text" value={lname} name="fname" onChange={(e) => setLname(e.target.value)} className='border relative bg-gray-100 p-2' required />
                </div>
                <div className="flex flex-col mb-4">
                    <label >User Type:</label>
                    <select onChange={(e) => setUserinfo(e.target.value)} value={userinfo} required>
                        <option value="" disabled defaultValue >What type of user are you?</option>
                        <option value="tenant">Tenant</option>
                        <option value="owner">Owner</option>
                    </select>
                </div>
                <div className="flex flex-col mb-4">
                    <label>Email </label>
                    <input type="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} className='border relative bg-gray-100 p-2' required />
                </div>
                <div className="flex flex-col mb-4">
                    <label>Password {newInfo.fname} </label>
                    <input type="password" value={password} name="pass" onChange={(e) => setPassword(e.target.value)} className='border relative bg-gray-100 p-2' required />
                </div>
                <p className='text-sm pt-2'>Have an account? <Link className='hover:text-violet-900 transtion' to="/login">Sign In</Link></p>
                <button className="w-full py-3 mt-8 bg-violet-600 hover:bg-violet-500 relative text-white">Sign Up</button>


            </form>
        </div>
    )
}


export default Signup