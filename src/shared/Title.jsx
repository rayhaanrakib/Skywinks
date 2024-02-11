import React from 'react';

const Title = ({ heading, subheading, paragraph }) => {
    return (
        <div className='text-center relative'>
            <h2 className='uppercase text-9xl font-extrabold text-primary tracking-wide select-none cursor-wait'>{subheading}</h2>
            <h3 className='capitalize text-5xl text-primaryV font-bold absolute top-2 left-1/3 right-1/3 '>{heading}</h3>
            <p className='text-secondaryV mx-60 text-center text-lg pt-5 cursor-help'>{paragraph}</p>
        </div>
    );
};

export default Title;