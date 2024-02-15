import React from 'react';

const Title = ({ heading, subheading, paragraph }) => {
    return (
        <div className='text-center relative'>
            <h2 className='uppercase text-6xl lg:text-9xl text-center w-full font-extrabold text-primary tracking-wide select-none cursor-wait inline-block'>{subheading}</h2>
            <h3 className='capitalize text-3xl lg:text-5xl text-center text-primaryV font-bold absolute top-0 lg:top-3 w-full '>{heading}</h3>
            <p className='text-secondaryV px-4 w-full text-center text-sm lg:text-lg pt-5 cursor-help'>{paragraph}</p>
        </div>
    );
};

export default Title;