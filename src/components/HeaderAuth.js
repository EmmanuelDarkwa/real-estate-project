import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const HeaderAuth = () => {
    const [authenticatedUser, setauthenticatedUser] = useState("");
    useEffect(() => {
        const listenAuth = onAuthStateChanged(auth, (user) => {
            if (user) {
                setauthenticatedUser(user);
            }
            else { setauthenticatedUser(null) }
        })
        return () => { listenAuth() }
    }, [])

    const userSignout = () => {
        signOut(auth).then(() => {
            console.log("User Signed out wai")
        }).catch((error) => {
            console.log("ERROR SIGNING OUT")
        });
    }


    return <>

        {authenticatedUser === null ? <>
            <Link className='hover:text-violet-900 transtion' to="/login">Log In</Link>
            <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition' to="/signup">Sign Up</Link>
        </> : <>
            <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition' to="/" onClick={userSignout}>Log Out</Link>
        </>
        }

    </>

};

export default HeaderAuth;
