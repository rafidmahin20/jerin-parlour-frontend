import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import Forms from './Forms';
import ServiceHome from './ServiceHome';
import Summary from './Summary';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
            <Helmet>
                <title>Home - Jerin's Parlour</title>
            </Helmet>
            <Banner></Banner>
            <ServiceHome></ServiceHome>
            <Summary></Summary>
            <Testimonials></Testimonials>
            <Forms></Forms>
        </div>
    );
};

export default Home;