import React from 'react';

//Import Components
import CarouselComponent from '../../components/Carousel';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BestPhotos from '../../components/BestPhotos';

const Homepage = ({data}) => {
    return (
        <div className='h-screen'>
            <Navbar />
            <CarouselComponent data={data} />
            <BestPhotos data={data} />
            <Footer />
        </div>
    );
};

export default Homepage;