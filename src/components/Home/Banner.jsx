import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className='lg:flex justify-between items-center'>
                <div className='text-center md:text-start'>
                    <h2 className='bg-white text-accent font-medium lg:text-xl inline-block px-3 py-2 rounded-lg shadow-2xl'>Booking With Us!</h2>
                    <h1 className='text-4xl md:text-4xl lg:text-7xl my-8 font-semibold leading-tight'>Find Next Place <br />
                        To Visit</h1>
                    <p className='lg:text-xl text-secondaryV'>Discover amzaing places at exclusive deals. <br />
                        Eat, Shop, Visit interesting places around the world.</p>
                </div>
                <div>
                    <div className="hidden lg:block h-[600px] carousel carousel-vertical rounded-box mr-0 lg:mr-20">
                        <div className="carousel-item h-full ">
                            <img className='w-[500px] object-cover shadow-md' src="https://i.ibb.co/f8HBw8d/banner.jpg" />
                        </div>
                        <div className="carousel-item h-full ">
                            <img className='w-[500px] object-cover shadow-md' src="https://i.ibb.co/f8HBw8d/banner.jpg" />
                        </div>
                        <div className="carousel-item h-full ">
                            <img className='w-[500px] object-cover shadow-md' src="https://i.ibb.co/f8HBw8d/banner.jpg" />
                        </div>
                        <div className="carousel-item h-full ">
                            <img className='w-[500px] object-cover shadow-md' src="https://i.ibb.co/f8HBw8d/banner.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;