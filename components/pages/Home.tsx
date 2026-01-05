import React from 'react';
import Hero from '../Hero';
import Services from '../Services';
import About from '../About';


const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Services />
            <About />
        </>
    );
};

export default Home;
