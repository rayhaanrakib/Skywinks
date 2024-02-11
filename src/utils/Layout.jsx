import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './../components/MainLayout/Nav';
import Footer from '../components/MainLayout/Footer';
import AnimatedCursor from 'react-animated-cursor';


const Layout = () => {
    return (
        <div className='select-none'>
            <AnimatedCursor
                innerSize={8}
                outerSize={35}
                innerScale={1}
                outerScale={2}
                outerAlpha={0}
                hasBlendMode={true}
                innerStyle={{
                    backgroundColor: 'var(--cursor-color)'
                }}
                outerStyle={{
                    border: '3px solid var(--cursor-color)'
                }}
            />

            <Nav></Nav>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Layout;