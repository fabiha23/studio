import React from 'react';
import Banner from '../Component/Banner';

const Home = () => {
    return (
        <div>
             <section className='bg-black min-h-[calc(100vh-76px)]'>
                <div className='max-w-8xl xl:mx-auto xl:px-9 lg:px-6 mx-3'>
                    <Banner></Banner>
                </div>
            </section>
        </div>
    );
};

export default Home;