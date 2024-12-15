import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router";
import { RxDropdownMenu } from "react-icons/rx";
import { useSelector } from "react-redux";

function Header({ isAuthenticated ,setisAuthenticated }) {
  const navigate = useNavigate();
  const [mobileNav, setMobileNav] = useState(false);
  const userData = useSelector((store) => store.user);
  const [loginName,setLoginName] = useState("")

  useEffect(() => {
    if (userData) {
      setisAuthenticated(true);
      setLoginName(userData.user.name);
    }
  }, [userData, setisAuthenticated]);

  const handleAuthentication = () => {
    if (isAuthenticated) {
      console.log("alredy login")
      navigate("/")
    } else {
      navigate("/auth");
    }
  };

  return (
    <div className=" w-full">
    <div className="grid bg-slate-100 grid-flow-col content-center px-6 p-4 font-mono ">
      <div className="col-span-1 cursor-pointer text-4xl">logo</div>
      <div className="col-span-10 content-center hidden md:block">
        <ul className="flex justify-center gap-20">
          <li className="border-2 border-black rounded-full px-2 py-1 hover:bg-green-300 cursor-pointer">
            <NavLink to="/find-mentor">Find a mentor</NavLink>
          </li>
          <li className="hover:text-green-500 cursor-pointer  active:text-green-500 ">
            <NavLink
              className={({ isActive }) => (isActive ? "text-green-500" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="hover:text-green-500 cursor-pointer">
            <NavLink
              className={({ isActive }) => (isActive ? "text-green-500" : "")}
              to="/blogs"
            >
              Blog
            </NavLink>
          </li>
          <li className="hover:text-green-500 cursor-pointer">
            <NavLink
              className={({ isActive }) => (isActive ? "text-green-500" : "")}
              to="/pricing"
            >
              Pricing
            </NavLink>
          </li>
        </ul>
      </div>
      {/* <div className="col-span-1 text-4xl content-center md:m-auto justify-items-end flex"> */}
      <div className="text-4xl content-center flex gap-6 justify-end">
        <RxDropdownMenu
          onClick={() => setMobileNav(!mobileNav)}
          className="md:hidden"
        />
        <div className="text-center" onClick={handleAuthentication}>
        <FaUserCircle className="ml-1" />
         <p className="text-sm ">{isAuthenticated ? loginName : "Login"}</p>
        </div>
        
      </div>
      
      {mobileNav && (
        <div className="bg-slate-200 absolute leading-loose rounded-sm z-20 md:hidden top-16 right-4">
          <ul className="p-6">
            <li className="hover:text-green-500 cursor-pointer  active:text-green-500 ">
              <NavLink
                className={({ isActive }) => (isActive ? "text-green-500" : "")}
                to="/"
                onClick={() => setMobileNav(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="hover:text-green-500 cursor-pointer">
              <NavLink
                className={({ isActive }) => (isActive ? "text-green-500" : "")}
                to="/blogs"
                onClick={() => setMobileNav(false)}
              >
                Blog
              </NavLink>
            </li>
            <li className="hover:text-green-500 cursor-pointer">
              <NavLink
                className={({ isActive }) => (isActive ? "text-green-500" : "")}
                to="/pricing"
                onClick={() => setMobileNav(false)}
              >
                Pricing
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
    </div>
  );
}

export default Header;
