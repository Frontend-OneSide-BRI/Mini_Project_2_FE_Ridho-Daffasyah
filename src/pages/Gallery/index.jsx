import React from 'react'

//Import Components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FilterComponent from '../../components/Filter';
import Tab from 'react-bootstrap/Tab';

const Gallery = ({ data, isGallery }) => {
    const allCategory = ["All"];
    const uniqueCategory = [...new Set(data.map((item) => item.category))];
    const categories = allCategory.concat(uniqueCategory);
    return (
        <div className='h-screen'>
            <Navbar isGallery={isGallery} />
            <Tab.Container defaultActiveKey="All">
                <FilterComponent data={data} category={categories} />
            </Tab.Container>
            <Footer />
        </div>
    )
}

export default Gallery;