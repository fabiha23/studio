import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar';

const Mainlayout = () => {
    return (
        <div>
            <header className='bg-black sticky top-0 z-50'>
                <header className='max-w-7xl xl:mx-auto xl:px-2 lg:px-6 mx-3'>
                    <Navbar></Navbar>
                </header>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;