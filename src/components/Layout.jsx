import React from "react";
import Logo from "../assets/QBTLogo.png";
import { NavLink } from "react-router-dom";
import Button from "../tabs/Button";
const Layout = () => {
  return (
    <div className="bg-warning px-4 py-2 ">
      <div className="flex justify-between items-center  ">
        <NavLink to={"/"}>
          <img src={Logo} alt="QBT Logo" />
        </NavLink>
        <div className="flex space-x-2 items-center">
          <NavLink
            className={
              "font-semibold text-[12px] sm:text-sm transition-all hover:underline "
            }
            target="_blank"
            to={"https://quadbtech.com/"}
          >
            {" "}
            Website{" "}
          </NavLink>
          <NavLink
            to={"/contact"}
            className="bg-orange-700 transition hover:bg-amber-600 rounded-full font-semibold text-[12px] sm:text-sm py-2 px-4 text-white"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Layout;
