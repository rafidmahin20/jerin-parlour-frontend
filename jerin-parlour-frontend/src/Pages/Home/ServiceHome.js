import React from 'react';
import { Link } from 'react-router-dom';
import useService from '../../Hooks/useService';
import Services from '../Services/Services';

const ServiceHome = () => {
    const [services] = useService();
    const navigateToService = ('/ourproducts')
    return (
        <div className='mb-10'>
        <h1 className="text-center text-4xl font-sans font-bold text-red-700 pt-10 pb-10">
          Products
        </h1>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 pt-10 pb-10">
              {
                  services.slice(0, 3).map((service, index) =>(
                      <Services key={index} service = {service}/>
                  ))
              }
        </div>
        <div className='flex justify-center'>
        <Link to={navigateToService}>
        <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
         Explore More
        </button>
        </Link>
        </div>
      </div>
    );
};

export default ServiceHome;