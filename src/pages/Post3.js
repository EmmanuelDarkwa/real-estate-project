import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import UploadPropertyImage from "../components/UploadPropertyImage";
import img1 from "../images/home1.png";
import { submitPost, updateOtherFields } from "../slice/usersSlice";
import { useSelector } from "react-redux";

const Post3 = () => {
  const navigate = useNavigate("");
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.userReducer;
  });

  const [disablebutton, setDisableButton] = useState(true);
  const nextPage = (e) => {
    e.preventDefault();
    if (disablebutton === true) {
      alert("Upload at least one image");
      return;
    }
    const date = Date().toString();
    const updatedFields = {
      userId: state.loginId,
      postId: v4(),
      dateUploaded: date,
    };
    dispatch(updateOtherFields(updatedFields));
    dispatch(submitPost());
    // navigate("/");
  };
  return (
    <div className="flex justify-center items-center mb-5 ">
      <form
        className="max-w-[900px] w-full mx-auto bg-white p-8 mt-2 shadow-lg"
        onSubmit={nextPage}>
        <div className="flex items-center justify-center">
          <img src={img1} alt="Centered Image" className="w-10 h-10 " />
        </div>
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl py-6">
          Lets Rent Out Your Property
        </h1>
        <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
          <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
            <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Property{" "}
              <span className="hidden sm:inline-flex sm:ml-2">Info</span>
            </span>
          </li>
          <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
            <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Other <span className="hidden sm:inline-flex sm:ml-2">Info</span>
            </span>
          </li>
          <li className="flex items-center text-blue-600">
            <span className="mr-2">
              {" "}
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
            </span>
            Pictures
          </li>
        </ol>
        <UploadPropertyImage setDisableButton={setDisableButton} />
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition">
            Post Property
          </button>
        </div>
      </form>
    </div>
  );
};

export default Post3;
