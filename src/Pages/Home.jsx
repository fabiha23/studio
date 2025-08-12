import React from 'react';
import Banner from '../Component/Banner';
import About from '../Component/About';
import Skills from '../Component/Skills';

const Home = () => {
    return (
        <div>
             <section className='bg-black min-h-[calc(100vh-72px)]'>
                <div className='max-w-8xl xl:mx-auto xl:px-9 lg:px-6 mx-3'>
                    <Banner></Banner>
                </div>
                <div className='max-w-8xl xl:mx-auto xl:px-9 lg:px-6 mx-3'>
                    <About></About>
                </div>
                <div className='max-w-8xl xl:mx-auto xl:px-9 lg:px-6 mx-3'>
                    <Skills></Skills>
                </div>
            </section>
        </div>
    );
};

export default Home;