import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const Mainlayout = () => {
    return (
        <div>
            <header className='bg-black sticky top-0 z-50 border-b-1 border-[#383837]'>
                <header className='max-w-8xl xl:mx-auto xl:px-9 lg:px-6 mx-3'>
                    <Navbar></Navbar>
                </header>
            </header>
            <Outlet></Outlet>
            <footer className='bg-black'>
                <footer className='max-w-7xl xl:mx-auto xl:px-2 lg:px-6 mx-3'>
                    <Footer></Footer>
                </footer>
            </footer>
        </div>
    );
};

export default Mainlayout;