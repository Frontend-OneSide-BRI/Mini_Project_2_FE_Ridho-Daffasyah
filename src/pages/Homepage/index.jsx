import React from 'react';

//Import Components
import CarouselComponent from '../../components/Carousel';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Homepage = () => {
    return (
        <div className='h-screen'>
            <Navbar />
            <CarouselComponent />
            <Footer />
        </div>
    );
};

export default Homepage;