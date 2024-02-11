import React from 'react';
import ViewAllButton from './../../shared/ViewAllButton';

const TopPlaces = () => {
    return (
        <div className='container mx-auto my-16'>
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                <div className='group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 cursor-pointer rounded-xl'>
                    <div className='h-96 w-[450px]'>
                        <img className='h-96 w-[450px] object-cover rounded-xl group-hover:scale-125 transition-transform duration-500' src="https://i.ibb.co/9TLXpR5/top-01.jpg" alt="" />
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/70'></div>
                    <div className='absolute inset-0 flex flex-col items-center justify-center px-10 text-center translate-y-[55%] group-hover:translate-y-0 transition-all duration-500'>
                        <h2 className='text-3xl font-bold text-white'>Western Europe</h2>
                        <p className='text-sm text-primary my-3 px-2 opacity-0  group-hover:opacity-100 transition-opacity duration-300'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,…</p>
                        <button class="rounded-full bg-primaryV py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                    </div>
                </div>
                <div className='group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 cursor-pointer rounded-xl'>
                    <div className='h-96 w-[450px]'>
                        <img className='h-96 w-[450px] object-cover rounded-xl group-hover:scale-125 transition-transform duration-500' src="https://i.ibb.co/F0HxJmd/top-02.jpg" alt="" />
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/70'></div>
                    <div className='absolute inset-0 flex flex-col items-center justify-center px-10 text-center translate-y-[55%] group-hover:translate-y-0 transition-all duration-500'>
                        <h2 className='text-3xl font-bold text-white'>America</h2>
                        <p className='text-sm text-primary my-3 px-2 opacity-0  group-hover:opacity-100 transition-opacity duration-300'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,…</p>
                        <button class="rounded-full bg-primaryV py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                    </div>
                </div>
                <div className='group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 cursor-pointer rounded-xl'>
                    <div className='h-96 w-[450px]'>
                        <img className='h-96 w-[450px] object-cover rounded-xl group-hover:scale-125 transition-transform duration-500' src="https://i.ibb.co/KFKFBMw/top-06.jpg" alt="" />
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/70'></div>
                    <div className='absolute inset-0 flex flex-col items-center justify-center px-10 text-center translate-y-[55%] group-hover:translate-y-0 transition-all duration-500'>
                        <h2 className='text-3xl font-bold text-white'>Asia</h2>
                        <p className='text-sm text-primary my-3 px-2 opacity-0  group-hover:opacity-100 transition-opacity duration-300'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,…</p>
                        <button class="rounded-full bg-primaryV py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                    </div>
                </div>
            </div>

            <ViewAllButton text="view all"></ViewAllButton>
        </div>
    );
};

export default TopPlaces;