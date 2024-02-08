import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './../components/MainLayout/Nav';
import Footer from '../components/MainLayout/Footer';

const Layout = () => {
    return (
        <div>
            <div className='shadow-sm'>
                <Nav></Nav>
            </div>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Layout;