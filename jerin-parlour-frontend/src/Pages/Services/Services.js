import React from "react";
import { Link } from "react-router-dom";

const Services = ({ service }) => {
  const { picture, name, price, shortDescription } = service;
  return (
    <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
      <img
        className="object-cover object-center w-full h-56"
        src={picture}
        alt="avatar"
      />

      <div className="flex items-center px-6 py-3 bg-gray-900">
        <svg
          className="w-6 h-6 text-white fill-current"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z"
          />
        </svg>

        <h1 className="mx-3 text-lg font-semibold text-white">Focusing</h1>
      </div>

      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-black">
          {name}
        </h1>

        <p className="py-2 text-gray-700 dark:text-black">{shortDescription}</p>

        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <h1 className="px-2 text-sm dark:text-black">Price: {price}</h1>
        </div>

        <div className="flex items-center mt-4 text-gray-700 dark:text-black">
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
            />
          </svg>

          <h1 className="px-2 text-sm">jerin@example.com</h1>
        </div>
        
         <div className="pt-5">
         <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none btn btn-accent">
            Book Now
          </button>
         </div>
      </div>
    </div>
  );
};

export default Services;
