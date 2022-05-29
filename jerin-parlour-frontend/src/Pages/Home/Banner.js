import React from "react";
import beautiful from '../../Image_Icon/Image/beautiful-young-woman.png'

const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={beautiful}
          className="max-w-sm rounded-lg shadow-2xl" alt=""
        />
        <div>
          <h1 className="text-4xl font-bold uppercase">Beauty Saloon</h1>
          <h1 className="text-4xl font-bold uppercase">for every woman</h1>
          <p className="py-6">
           Jerins parolour proudly been one of the pioneers beauty related servies in Bangladesh.
          </p>
          <button className="btn btn-primary">Get an appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
