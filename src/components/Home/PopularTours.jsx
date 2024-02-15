import React from 'react';
import ViewAllButton from '../../shared/ViewAllButton';

const PopularTours = () => {
    return (
        <div className='container mx-auto my-16 px-10 lg:px-0'>
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

                <div className='group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 cursor-pointer rounded-xl'>
                    <div className='h-[450px] md:h-[550px] w-full relative'>
                        <img className='h-[450px] md:h-[550px] w-full object-cover rounded-xl ' src="https://i.ibb.co/VVzBZ08/top-05.jpg" alt="" />
                        <h3 className='absolute text-primary uppercase font-medium inline-block top-4 left-2 py-1 px-4 bg-primaryV rounded-xl'>Special</h3>
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                    <div className='absolute inset-0 flex flex-col justify-center px-10 translate-y-[48%] group-hover:translate-y-[32%] transition-all duration-300'>
                        <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-white'>
                            France – Eiffel Tower, <br /> Paris</h2>
                        <div className='flex justify-between mt-6'>
                            <div className=''>
                                <p className='text-primary mb-3'>2 Days 1 Nights</p>
                                <div className="rating rating-sm">
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                </div>
                                <span className='ml-2 text-primary'>(53 reviews)</span>
                            </div>
                            <div>
                                <del className='text-gray-400 text-xl'>$2000</del>
                                <h2 className='text-primary text-xl'>$1500</h2>
                            </div>
                        </div>
                        {/* <p className=' opacity-0  group-hover:opacity-100 transition-opacity duration-300'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,…</p>
                        <button class="rounded-full bg-primaryV py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button> */}
                    </div>
                </div>
                <div className='group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 cursor-pointer rounded-xl'>
                    <div className='h-[450px] md:h-[550px] w-full relative'>
                        <img className='h-[450px] md:h-[550px] w-full object-cover rounded-xl ' src="https://i.ibb.co/6skhxRR/asset-11.jpg" alt="" />
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                    <div className='absolute inset-0 flex flex-col justify-center px-10 translate-y-[48%] group-hover:translate-y-[32%] transition-all duration-300'>
                        <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-white'>
                            Austria – Vienna,<br />Hallstatt</h2>
                        <div className='flex justify-between mt-6'>
                            <div className=''>
                                <p className='text-primary mb-3'>3 Days 2 Nights</p>
                                <div className="rating rating-sm">
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                </div>
                                <span className='ml-2 text-primary'>(53 reviews)</span>
                            </div>
                            <div>
                                <del className='text-gray-400 text-xl'>$2000</del>
                                <h2 className='text-primary text-xl'>$1500</h2>
                            </div>
                        </div>
                        {/* <p className=' opacity-0  group-hover:opacity-100 transition-opacity duration-300'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,…</p>
                        <button class="rounded-full bg-primaryV py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button> */}
                    </div>
                </div>
                <div className='group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 cursor-pointer rounded-xl'>
                    <div className='h-[450px] md:h-[550px] w-full relative'>
                        <img className='h-[450px] md:h-[550px] w-full object-cover rounded-xl ' src="https://i.ibb.co/yk6jGmV/asset-13.jpg" alt="" />
                        <h3 className='absolute text-primary uppercase font-medium inline-block top-4 left-2 py-1 px-4 bg-primaryV rounded-xl'>20% off</h3>
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                    <div className='absolute inset-0 flex flex-col justify-center px-10 translate-y-[48%] group-hover:translate-y-[32%] transition-all duration-300'>
                        <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-white'>
                            India – Mumbai, <br /> New Delhi</h2>
                        <div className='flex justify-between mt-6'>
                            <div className=''>
                                <p className='text-primary mb-3'>5 Days 4 Nights</p>
                                <div className="rating rating-sm">
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                </div>
                                <span className='ml-2 text-primary'>(53 reviews)</span>
                            </div>
                            <div>
                                <del className='text-gray-400 text-xl'>$2000</del>
                                <h2 className='text-primary text-xl'>$1500</h2>
                            </div>
                        </div>
                        {/* <p className=' opacity-0  group-hover:opacity-100 transition-opacity duration-300'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,…</p>
                        <button class="rounded-full bg-primaryV py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button> */}
                    </div>
                </div>

            </div>

            <div className='flex flex-col items-center justify-center text-center mt-8 lg:mt-12'>
                <ViewAllButton text="see more" url="/search"></ViewAllButton>
            </div>
        </div>
    );
};

export default PopularTours;