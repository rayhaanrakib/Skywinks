import React from 'react';

const TourCard = () => {
    return (
        <div>
            <div className=" rounded-md bg-white border border-primary text-secondaryV shadow-lg">
                {/*  <!-- Image --> */}
                <figure>
                    <img
                        src="https://i.ibb.co/BsH3KSs/banner-03.jpg"
                        alt="card image"
                        className="aspect-video w-full object-cover"
                    />
                </figure>
                {/*  <!-- Body--> */}
                <div className="p-6">
                    <header className="mb-4">
                        <h3 className="text-xl font-medium text-secondary">
                            Venice, Rome and Milan – 9 Days
                        </h3>
                        <p className="py-2 text-primaryV font-medium text-lg"> <del className='mr-2 text font-normal text-secondaryV'>$3,700</del>$2,000</p>
                    </header>
                    <p>
                        A wonderful serenity has taken possession of my entire soul...
                    </p>
                </div>
                <div className="flex justify-end p-6 pt-0">
                    <a href="#_" class="relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-primaryV border-2 border-primaryV rounded-full hover:text-white group hover:bg-gray-50">
                        <span class="absolute left-0 block w-full h-0 transition-all bg-primaryV opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                        <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span class="relative">Details</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TourCard;