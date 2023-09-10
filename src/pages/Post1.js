import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import img1 from "../images/home1.png"
import { pushPost } from '../slice/usersSlice';

const Post1 = () => {
    const [protype, setProtype] = useState("");
    const [proloc, setProLoc] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate('');
    const dispatch = useDispatch();
    const nextPage = (e) => {
        e.preventDefault();
        const postInfo = {
            protype,
            proloc,
            price
        };
        dispatch(pushPost(postInfo));
        navigate("/post2");
    }


    return (
        <div className="flex justify-center items-center ">

            <form className="max-w-[700px] w-full mx-auto bg-white p-8 mt-2 " onSubmit={nextPage}>
                <div className="flex items-center justify-center">
                    <img src={img1} alt="Centered Image" className="w-10 h-10 " />
                </div>
                <h3 className='text-xl font-bold text-center py-4 '>PROPERTY INFORMATION</h3>
                <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
                    <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                            <span className="mr-2">1</span>
                            Property <span className="hidden sm:inline-flex sm:ml-2">Info</span>
                        </span>
                    </li>
                    <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                            <span className="mr-2">2</span>
                            Other <span className="hidden sm:inline-flex sm:ml-2">Info</span>
                        </span>
                    </li>
                    <li className="flex items-center">
                        <span className="mr-2">3</span>
                        Submsission
                    </li>
                </ol>
                <div className="flex flex-col mb-4 bg-slate-200 border border-black py-3 px-4  mt-10 "  >
                    <select onChange={(e) => setProtype(e.target.value)} value={protype} className="bg-transparent focus:outline-none" required>
                        <option value="" disabled defaultValue >Proprty Type</option>
                        <option value="house">House</option>
                        <option value="apartment">Apartment</option>
                    </select>
                </div>

                <div className="flex flex-col mb-4 bg-slate-200 border border-black py-3 px-4  mt-10"  >
                    <select onChange={(e) => setProLoc(e.target.value)} value={proloc} className="bg-transparent focus:outline-none" required>
                        <option value="" disabled defaultValue >Location</option>
                        <option value="ashanti">Ashanti</option>
                        <option value="brong ahafo">Brong-Ahafo</option>
                        <option value="central">Central</option>
                        <option value="eastern">Eastern</option>
                        <option value="greater accra">Greater Accra</option>
                        <option value="northern">Northern</option>
                        <option value="upper east">Upper East</option>
                        <option value="upper west">Upper West</option>
                        <option value="volta">Volta</option>
                        <option value="western">Western</option>
                    </select>
                </div>

                <div className="flex flex-col mb-4 bg-slate-200 border border-black py-3 px-4  mt-10">
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className='remove  bg-transparent focus:outline-none ' placeholder='Price per month' required />
                </div>
                <div className="text-center">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4  focus:ring focus:ring-blue-200">
                        Next Page
                    </button>
                </div>
            </form >
        </div >
    )
}

export default Post1