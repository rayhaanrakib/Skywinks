import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Title = ({ heading, subheading, paragraph }) => {
    return (
        <div className='text-center relative'>
            <h2 className='uppercase text-5xl md:text-7xl lg:text-9xl text-center w-full font-extrabold text-primary tracking-wide select-none cursor-wait inline-block'><Fade cascade damping={0.1}>{subheading}</Fade></h2>
            <h3 className='capitalize text-xl md:text-3xl lg:text-5xl text-center text-primaryV font-bold absolute top-0 md:top-1 lg:top-3 w-full'><Fade>{heading}</Fade></h3>
            <p className='text-secondaryV px-4 w-full text-center text-sm lg:text-lg pt-5 cursor-help'>{paragraph}</p>
        </div>
    );
};

export default Title;