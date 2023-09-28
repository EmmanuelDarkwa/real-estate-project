import React, { useState } from "react";
import { BiSolidChevronsLeft, BiSolidChevronsRight } from "react-icons/bi";

const ImageSlider = (props) => {
  const postImgs = props.postImgs;
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === postImgs.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? postImgs.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <div className="w-full h-96 overflow-hidden">
        <img
          src={postImgs[currentIndex]}
          alt={`Property Image ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-transform transform translate-x-0"
        />
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="bg-gray-800 text-white rounded-full p-2 mr-4 hover:bg-gray-600 focus:outline-none">
          <BiSolidChevronsLeft />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center justify-center">
        <button
          onClick={nextSlide}
          className="bg-gray-800 text-white rounded-full p-2 ml-4 hover:bg-gray-600 focus:outline-none">
          <BiSolidChevronsRight />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
