import React from 'react';
import Banner from './../components/Home/Banner';
import TopPlaces from './../components/Home/TopPlaces';
import Title from './../shared/Title';

const Home = () => {
    return (
        <div>

            <div className='bg-gradient-to-b from-primary to-white py-40 md:py-24 mx-6 md:mx-0'>
                <Banner></Banner>
            </div>

            <div className='my-24'>
                <Title heading="most visited places" subheading="top places" paragraph="Explore our top destinations voted by more than 100,000+ customers around the world."></Title>
                <TopPlaces></TopPlaces>
            </div>

        </div>

    );
};

export default Home;