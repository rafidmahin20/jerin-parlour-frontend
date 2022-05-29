import React from "react";
import { Link } from "react-router-dom";
import group from "../../../Image_Icon/Group 33092.png";

const Header = () => {
  return (
    <nav className="bg-red-200 shadow ">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div>
            <img src={group} className="" style={{ height: "40px" }} alt="" />
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="items-center md:flex">
          <div className="flex flex-col md:flex-row md:mx-6">
            <Link
              to="/"
              href="#"
              class="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-black hover:bg-gray-900 hover:text-gray-100 md:mx-2"
            >
              Home
            </Link>
            <Link
              to="/ourproducts"
              href="#"
              class="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-black hover:bg-gray-900 hover:text-gray-100 md:mx-2"
            >
              Our Products
            </Link>
            <Link
              to="/ourteam"
              href="#"
              class="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-black hover:bg-gray-900 hover:text-gray-100 md:mx-2"
            >
              Our Team
            </Link>
            <Link
              to="/contactus"
              href="#"
              class="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-black hover:bg-gray-900 hover:text-gray-100 md:mx-2"
            >
              Contact Us
            </Link>
          </div>

          <div className="flex justify-center md:block">
            <Link to="/login">
              <button className=" inline-flex items-center btn btn-secondary border-0 py-1 px-3 focus:outline-none hover:btn-accent rounded text-base mt-4 md:mt-0">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
