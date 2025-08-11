import React from 'react';
import logo from '../../public/logo.png'

const Navbar = () => {
    return (
        <div className='text-[#D1D1C7] py-4 px-7'>
            <div className='flex justify-between items-center'>
                <img className='w-11 h-11' src={logo} alt="" />
                <ul className='flex gap-9 text-xl'>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Education</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;