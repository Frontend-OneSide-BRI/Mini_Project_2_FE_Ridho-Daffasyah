import React, {useState, useEffect} from 'react';

//Import Components
import CarouselComponent from '../../components/Carousel';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BestSection from '../../components/BestSection';

const Homepage = ({ data }) => {
    const [isHomepage, setIsHomepage] = useState(false);
    const [isBest, setIsBest] = useState(false);

    useEffect(() => {
        //Check if the page is gallery or not
        if (window.location.pathname === '/') {
            setIsHomepage(true);
            setIsBest(true);
        }
    }, []);
    return (
        <div className='h-screen'>
            <Navbar isHomepage={isHomepage}/>
            <CarouselComponent data={data} />
            <BestSection data={data} isBest={isBest} />
            <Footer />
        </div>
    );
};

export default Homepage;