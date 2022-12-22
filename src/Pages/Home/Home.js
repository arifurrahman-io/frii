import React from 'react';
import Marquee from 'react-fast-marquee';
import Carousel from './Carousel';

const Home = () => {
    return (
        <div>
            <Marquee pauseOnHover className='my-2'>
                <p >Welcome to Faizur Rahman Ideal Institute, Dhaka</p>
                <a href='#' className='mx-5 bg-rose-500 p-2 rounded-lg text-white'>Admission Circular 2023</a>
            </Marquee>
            <Carousel></Carousel>
        </div>
    );
};

export default Home;