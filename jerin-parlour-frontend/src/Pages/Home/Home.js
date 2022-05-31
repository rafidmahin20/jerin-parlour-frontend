import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import ServiceHome from './ServiceHome';

const Home = () => {
    return (
        <div className='px-12'>
            <Helmet>
                <title>Home - Jerin's Parlour</title>
            </Helmet>
            <Banner></Banner>
            <ServiceHome></ServiceHome>
        </div>
    );
};

export default Home;