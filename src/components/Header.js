import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";
import HeaderAuth from "./HeaderAuth";
import { useSelector } from "react-redux";

const Header = () => {
  const state = useSelector((state) => {
    return state.userReducer;
  });
  return (
    <header className="py-6  border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <div className="flex items-center gap-6">
          <HeaderAuth />
        </div>
      </div>
    </header>
  );
};

export default Header;
