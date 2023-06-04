//Carousel Component for the Home Page
import React, {useState} from 'react';

//Import Library
import Carousel from 'react-bootstrap/Carousel';

//Import CSS
import './index.css';

//Import Data
import { getOneData, filterData } from '../../utils/core';

const CarouselComponent = ({data}) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const dataAll = [];
    const dataOneNature = getOneData(filterData(data, "nature"));
    const dataOneSport = getOneData(filterData(data, "sport"));
    const dataOneCartoon = getOneData(filterData(data, "cartoon"));
    dataAll.push(dataOneNature[0], dataOneSport[0], dataOneCartoon[0]);
    
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
            {dataAll.map((item, index) => {
                if (item.type === "image") {
                    return (
                        <Carousel.Item
                            className="carousel-item"
                            key={index}
                            style={{ 
                                backgroundImage: `url(${item.src})`,
                            }}
                        >
                            <Carousel.Caption>
                                <h1>{item.title}<span className="text-warning"> Photos!</span></h1>
                                <p>{item.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                } else {
                    return (
                        <Carousel.Item key={index}>
                            <video className="video-fluid video" src={item.src} autoPlay={true} loop muted></video>
                            <Carousel.Caption>
                                <h1>{item.title}<span className="text-warning"> Photos!</span></h1>
                                <p>{item.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                }
            })}
            </Carousel>
    );
}

export default CarouselComponent;