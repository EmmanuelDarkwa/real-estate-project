import React, { useState } from "react";
import { BiArea, BiBuilding, BiSolidBath } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import img1 from "../images/home1.png";
import { mergePropertyData } from "../slice/usersSlice";

const Post2 = () => {
  const [probath, setProBath] = useState("");
  const [proroom, setProRoom] = useState("");
  const [sarea, setSarea] = useState("");
  const [proabout, setProAbout] = useState("");
  const navigate = useNavigate("");
  const dispatch = useDispatch();
  const nextPage = (e) => {
    e.preventDefault();
    if (proabout.split(" ").filter(Boolean).length < 35) {
      alert("Description of the property should be atleast 35 words");
      return;
    }
    const postInfo = {
      probath,
      proroom,
      sarea,
      proabout,
    };
    dispatch(mergePropertyData(postInfo));
    navigate("/post3");
  };
  return (
    <div className="flex justify-center items-center mb-5">
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
          <li className="flex items-center">
            <span className="mr-2">3</span>
            Pictures
          </li>
        </ol>
        <div className="mt-10 mb-4">
          <label className="sr-only">Property Rooms</label>
          <div className="relative">
            <input
              type="number"
              value={proroom}
              name="email"
              style={{ height: "3.3rem", border: "1px solid #718096" }}
              onChange={(e) => setProRoom(e.target.value)}
              placeholder="Number of Rooms"
              className="remove w-full rounded-lg border border-slate-500 p-4 pe-12 text-sm shadow-sm"
              required
            />
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <BiBuilding />
            </span>
          </div>
        </div>
        <div className="mt-10 mb-4">
          <label className="sr-only">Property Bathrooms</label>
          <div className="relative">
            <input
              type="number"
              value={probath}
              name="email"
              style={{ height: "3.3rem", border: "1px solid #718096" }}
              onChange={(e) => setProBath(e.target.value)}
              placeholder="Number of Bathrooms"
              className="remove w-full rounded-lg border border-slate-500 p-4 pe-12 text-sm shadow-sm"
              required
            />
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <BiSolidBath />
            </span>
          </div>
        </div>
        <div className="mt-10 mb-4">
          <label className="sr-only">Property Square Area</label>
          <div className="relative">
            <input
              type="number"
              value={sarea}
              name="sarea"
              style={{ height: "3.3rem", border: "1px solid #718096" }}
              onChange={(e) => setSarea(e.target.value)}
              placeholder="Property Square Area (m)"
              className="remove w-full rounded-lg border border-slate-500 p-4 pe-12 text-sm shadow-sm"
              required
            />
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <BiArea />
            </span>
          </div>
        </div>
        <div className="remove mt-10 mb-6">
          <label for="OrderNotes" className="sr-only">
            Order notes
          </label>
          <div className="remove overflow-hidden">
            <textarea
              style={{ border: "1px solid #718096" }}
              className="w-full  resize-none align-top border p-4 pe-12 text-sm shadow-sm focus:ring-0 sm:text-sm placeholder-black"
              rows="4"
              value={proabout}
              onChange={(e) => setProAbout(e.target.value)}
              placeholder="Describe the property in not less than 35 words."></textarea>
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition">
            Next Page: Pictures
          </button>
        </div>
      </form>
    </div>
  );
};

export default Post2;
