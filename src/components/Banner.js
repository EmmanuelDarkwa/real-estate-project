import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Image from "../assets/img/house-banner.png";
import Search from "../components/Search";

const Banner = () => {
  const state = useSelector((state) => {
    return state.userReducer;
  });
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    if (state.userInfo.userinfo === "owner") {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [state.userInfo.userinfo]);

  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div
          className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start lg:text-left justify-center
      flex-1 px-4 lg:px-0">
          <h3 className="max-w-[480px] mb-8">Real Estate Services</h3>
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            Rent Your Dream <span className="text-violet-700">Home</span> With
            Us.
          </h1>
          <p className="max-w-[480px] mb-8">
            The shortest distance between paradise and a place you call home.
            Change begins at home.
          </p>
          {showButton && (
            <Link
              className="bg-blue-700 hover:bg-blue-900 text-white px-4 py-3 rounded-lg transition"
              to="/post1">
              Upload a Property
            </Link>
          )}
        </div>
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img src={Image} alt="" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
