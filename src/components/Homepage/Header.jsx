import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import logo from "../../images/logo.PNG";
import { Link } from "react-router-dom";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="absolute w-full h-[5rem]">
      <div className=" lg:flex items-center w-full h-full xl:max-w-[1250px] mx-auto px-4">
        <div className="cursor-pointer">
          <div className=" relative z-30 w-12">
            <img src={logo} alt="logo" className="w-full h-auto" />
          </div>
        </div>
        <div className="relative z-30 flex-1 flex items-center justify-end space-x-10">
          <ul className="flex items-center space-x-6">
            <li className="text-sm cursor-pointer hover:text-gray-200">
              <Link to="/">Home</Link>
            </li>
            <li className="text-sm cursor-pointer hover:text-gray-200">
              <Link to="/about">About Us</Link>
            </li>
            <li className="relative text-sm cursor-pointer hover:text-gray-200">
              <div onClick={toggleDropdown}>Services</div>
              {dropdownOpen && (
                <ul className="absolute left-0 top-full mt-3 bg-red shadow-lg rounded-md">
                  <li className="px-3  hover:text-black bg-gradient-to-tr from-custom-red to-custom-orange rounded-full mt-2 marker: ">
                    <Link to= "service"> Service 1</Link> 
                  </li>
                  <li className=" px-3  hover:text-black bg-gradient-to-tr from-custom-red to-custom-orange rounded-full mt-3 ">
                  <Link to= "service"> Service 2</Link> 
                  </li>
                </ul>
              )}
            </li>
            <li className="text-sm cursor-pointer hover:text-gray-200">
              Profile
            </li>
          </ul>
          <button className="text-sm w-[100px] py-2 bg-[#d80027] rounded-md">
          <Link to = "/contactus"> Contact Us </Link>
          </button>
        </div>
      </div>
      <div className="w-full h-full flex items-center px-4 text-sm">
        <IoMenu size={18} className="lg:hidden" />
      </div>
    </div>
  );
};

export default Header;
