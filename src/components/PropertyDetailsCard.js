import React, { useState } from "react";
import { BiBed, BiBath, BiArea, BiPhone } from "react-icons/bi";
import { Link } from "react-router-dom";
import aimg from "../images/ag.png";
import ImageSlider from "./ImageSlider";
import Modal from "./Modal";

const PropertyDetailsCard = (props) => {
  const post = props.post;
  const monthlyPrice = Math.round(post.propertyInfo.price / 12);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="container mx-auto  mb-2">
      <Modal isOpen={isModalOpen} onClose={closeModal} post={post} />

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div>
            <button
              onClick={openModal}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5">
              Purchase
            </button>
            <h2 className="text-2xl font-semibold text-violet-800">
              ANNUALLY: ₵{post.propertyInfo.price}
            </h2>
          </div>
          <h3 className="text-lg mb-4 capitalize">
            {post.propertyInfo.address}
          </h3>
        </div>
        <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
          <div className="bg-green-500 text-white px-3 capitalize">
            {post.propertyInfo.protype}
          </div>
          <div className="bg-violet-500 text-white px-3 capitalize">
            {post.propertyInfo.proloc}
          </div>
        </div>

        <div className="text-xl font-semibold text-violet-800">
          MONTHLY: ₵{monthlyPrice}
        </div>
      </div>

      <div className="flex flex-col items-start gap-8 lg:flex-row">
        <div className="max-w-[768px]">
          <div className="mb-8">
            <ImageSlider postImgs={post.propertyPictures} />
          </div>
          <div className="flex gap-x-6 text-violet-700 mb-6 ">
            <div className="flex gap-x-2 items-center text-blue-700">
              <BiPhone className="text-2xl" />
              <div>{post.phone}</div>
            </div>
            <div className="flex gap-x-2 items-center">
              <BiBed className="text-2xl" />
              <div>{post.propertyInfo.proroom}</div>
            </div>
            <div className="flex gap-x-2 items-center">
              <BiBath className="text-2xl" />
              <div>{post.propertyInfo.probath}</div>
            </div>
            <div className="flex gap-x-2 items-center">
              <BiArea className="text-2xl" />
              <div>{post.propertyInfo.sarea}</div>
            </div>
          </div>

          <div className="normal-case">{post.propertyInfo.proabout}</div>
        </div>
        <div className="flex-1 bg-white w-full mb-8 border border-gray-400 rounded-lg px-6 py-8">
          <div className="flex items-center gap-x-4 mb-8">
            <div>
              <img
                className="w-20 h-20 p-1 border border-gray-300 rounded-full"
                src={aimg}
                alt="agent"
              />
            </div>
            <div className="font-bold text-lg">{post.fullName}</div>
          </div>
          <form className="flex flex-col gap-y-4 ">
            <input
              className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full
          px-4 h-14 text-sm"
              type="text"
              placeholder="Name"
            />
            <input
              className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full
          px-4 h-14 text-sm"
              type="text"
              placeholder="Email"
            />
            <input
              className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full
          px-4 h-14 text-sm"
              type="number"
              placeholder="Phone*"
            />
            <textarea
              className="border border-gray-300 focus:border-violet-700 outline-none resize-none
        rounded w-full p-4 h-36 text-sm text-gray-400"
              placeholder="Message"
              defaultValue="Hello I am
        interested in [Modern apartment]"></textarea>
            <div className="flex gap-x-2 ">
              <button
                className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm
          w-full transition">
                Send message
              </button>
              <button
                className="border border-violet-700 text-violet-700 hover:border-violet-500
            hover:text-violet-500 rounded p-4 text-sm w-full transition">
                Call
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsCard;
