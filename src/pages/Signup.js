import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { useDispatch } from "react-redux"
import { pushNewUser } from '../slice/usersSlice';
import { BiAt, BiMale, BiSolidGroup, BiSolidShow, BiSolidUser, BiSolidUserCircle, BiSolidUserDetail, BiUserCircle } from 'react-icons/bi';



const Signup = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [userinfo, setUserinfo] = useState("");
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate('');
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const [showconPassword, setShowConPassword] = useState(false);
    const toggleConPasswordVisibility = () => {
        setShowConPassword(!showconPassword);
    };
    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };
    const signUpp = async (e) => {
        e.preventDefault();
        if (!validatePassword(password)) {
            setPasswordError(
                'Password must have at least one uppercase letter, one digit, one special character, and be at least 8 characters long.'
            );
            return;
        }
        if (password !== confirmPassword) {
            setPasswordError('Passwords do not match');
            return;
        }
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
            dispatch(pushNewUser(newInfo));
            navigate("/");
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                setError('User Already Exists')
            }
            else {
                setError('We Encountered an error')
            }
            console.error(error.code);
        }
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                    Become a Homelander!
                </h1>
                <form
                    onSubmit={signUpp}
                    action=""
                    className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                >
                    <p className="text-center text-lg font-medium">Create an account</p>
                    <p className='text-4 text-center text-red-500' >{error}</p>
                    <div>
                        <label className="sr-only">First Name</label>
                        <div className="relative">
                            <input
                                type="text"
                                value={fname}
                                name="fname"
                                onChange={(e) => setFname(e.target.value)}
                                placeholder="First Name"
                                style={{ height: '3.3rem', border: '1px solid #718096' }}
                                className="remove w-full rounded-lg border-slate-500 border p-4 pe-12 text-sm shadow-sm"
                                required
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <BiSolidUser />
                            </span>
                        </div>
                    </div>
                    <div>
                        <label className="sr-only">Last Name</label>
                        <div className="relative">
                            <input
                                type="text"
                                value={lname}
                                name="lname"
                                onChange={(e) => setLname(e.target.value)}
                                placeholder="Last Name"
                                style={{ height: '3.3rem', border: '1px solid #718096' }}
                                className="remove w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                required
                            />
                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <BiSolidUserDetail />
                            </span>
                        </div>
                    </div>
                    <div>
                        <label className="sr-only">User Type</label>
                        <div className="relative">
                            <select
                                value={userinfo}
                                onChange={(e) => setUserinfo(e.target.value)}
                                placeholder="User Type"
                                className="remove w-full rounded-lg border border-slate-500 p-4 pe-12 text-sm shadow-sm"
                                style={{ height: '3.3rem', border: '1px solid #718096' }}
                                required
                            >
                                <option value="" disabled defaultValue >User Type</option>
                                <option value="tenant">Tenant</option>
                                <option value="owner">Owner</option>
                            </select>
                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <BiSolidGroup />
                            </span>
                        </div>
                    </div>
                    <div>
                        <label className="sr-only">Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                value={email}
                                name="email"
                                tyle={{ height: '3.3rem', border: '1px solid #718096' }}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                className="remove w-full rounded-lg border border-slate-500 p-4 pe-12 text-sm shadow-sm"
                                required
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <BiAt />
                            </span>
                        </div>
                    </div>
                    <div>
                        <label className="sr-only">Password</label>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                placeholder="Password"
                                style={{ height: '3.3rem', border: '1px solid #718096' }}
                                name="pass"
                                onChange={(e) => setPassword(e.target.value)}
                                className="remove w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                required
                            />
                            <span
                                className="absolute inset-y-0 end-0 grid place-content-center px-4"
                                onClick={togglePasswordVisibility}
                                style={{ cursor: "pointer" }}
                            >
                                <BiSolidShow />
                            </span>
                        </div>
                    </div>

                    <div>
                        <label className="sr-only"> Confirm Password</label>

                        <div className="relative">
                            <input
                                type={showconPassword ? "text" : "password"}
                                value={confirmPassword}
                                placeholder="Confirm password"
                                name="cpass"
                                style={{ height: '3.3rem', border: '1px solid #718096' }}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="remove w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                required
                            />
                            <span
                                className="absolute inset-y-0 end-0 grid place-content-center px-4"
                                onClick={toggleConPasswordVisibility}
                                style={{ cursor: "pointer" }}
                            >
                                <BiSolidShow />
                            </span>
                        </div>
                    </div>
                    {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}

                    <button
                        type="submit"
                        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                    >
                        Register
                    </button>
                    <p className="text-center text-sm text-gray-500">
                        Have an account?

                        <span> </span>
                        <Link
                            className="text-center text-sm text-blue-500"

                            to="/login"
                        >
                            Sign In
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}


export default Signup

