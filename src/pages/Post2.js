import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import img1 from "../images/home2.png"
import { pushPost, submitPost } from '../slice/usersSlice';


const Post2 = () => {
    const [probath, setProBath] = useState("");
    const [proroom, setProRoom] = useState("");
    const [sarea, setSarea] = useState("");
    const navigate = useNavigate('');
    const dispatch = useDispatch();
    const nextPage = (e) => {
        e.preventDefault();
        const postInfo = {
            probath,
            proroom,
            sarea
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
                <h3 className='text-xl font-bold text-center py-4 '>OTHER INFORMATION</h3>
                <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
                    <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
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
                <div className="flex flex-col mb-4 bg-slate-200 border border-black py-3 px-4  mt-10">
                    <input type="number" value={proroom} onChange={(e) => setProRoom(e.target.value)} className='remove  bg-transparent focus:outline-none ' placeholder='Number of Rooms' required />
                </div>
                <div className="flex flex-col mb-4 bg-slate-200 border border-black py-3 px-4  mt-10">
                    <input type="number" value={probath} onChange={(e) => setProBath(e.target.value)} className='remove  bg-transparent focus:outline-none ' placeholder='Number of Bathrooms' required />
                </div>
                <div className="flex flex-col mb-4 bg-slate-200 border border-black py-3 px-4  mt-10">
                    <input type="number" value={sarea} onChange={(e) => setSarea(e.target.value)} className='remove  bg-transparent focus:outline-none ' placeholder='Property Square Area (m)' required />
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

export default Post2