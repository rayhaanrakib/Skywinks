import React from 'react';
import Banner from './../components/Home/Banner';
import TopPlaces from './../components/Home/TopPlaces';
import { Helmet } from 'react-helmet';
import Title from './../shared/Title';
import PopularTours from './../components/Home/PopularTours';
import NewTours from '../components/Home/NewTours';

const Home = () => {
    return (
        <div>
            <Helmet title='SkyWinks | Your Ultimate Travel Companion'></Helmet>
            <div className='bg-gradient-to-b from-primary to-white pt-40 px-6 lg:px-0'>
                <Banner></Banner>
            </div>

            <div className='my-36'>
                <Title heading="top destination" subheading="Destinations" paragraph="Explore our top destinations voted by more than 100,000+ customers around the world."></Title>
                <TopPlaces></TopPlaces>
            </div>
            <div className='my-36'>
                <Title heading="most visited places" subheading="top places" paragraph="Explore our top destinations voted by more than 100,000+ customers around the world."></Title>
                <PopularTours></PopularTours>
            </div>
            <div className='my-36'>
                <Title heading="Recently Added Tours" subheading="Fresh Packages"></Title>
                <NewTours></NewTours>
            </div>

        </div>

    );
};

export default Home;