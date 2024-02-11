import React from 'react';

const ViewAllButton = ({text}) => {
    return (
        <div className='flex flex-col items-center justify-center text-center mt-12'>
            <a href="#_" className="relative rounded px-10 py-2 overflow-hidden group bg-primaryV  hover:bg-gradient-to-r hover:from-primaryV hover:to-primaryV text-white hover:ring-2 hover:ring-offset-2 hover:ring-primaryV transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative uppercase font-medium text-xl">{text}</span>
            </a>
        </div>

    );
};

export default ViewAllButton;