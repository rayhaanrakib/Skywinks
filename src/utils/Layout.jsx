import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './../components/MainLayout/Nav';
import Footer from '../components/MainLayout/Footer';
import AnimatedCursor from 'react-animated-cursor';

const Layout = () => {
    return (
        <div>
            <AnimatedCursor />


            <Nav></Nav>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Layout;