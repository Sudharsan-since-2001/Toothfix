import React from 'react';
import Hero from '../Hero';
import Services from '../Services';
import About from '../About';
import Process from '../Process';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Services />
            <About />
            <Process />
        </>
    );
};

export default Home;
