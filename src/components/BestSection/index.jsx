//Best Photos Component
import React from 'react';

//Import CSS
import "./index.css";

//Import Component
import CardGallery from '../CardGallery';

//Import js
import { filterData } from '../../utils/core';

const BestSection = ({data, isBest}) => {
    const bestCategory = ["nature", "sport", "cartoon"];

    return (
        <section className="d-flex flex-column p-5" id="bestImages">
            {
                bestCategory.map((category, index) => {
                    let filteredData = filterData(data, category);
                    filteredData = filteredData.slice(0, 4);
                    return (
                        <div key={index}>
                            <h1 className="title-best">Best {category}</h1>
                            <div id={`best-${category}`}>
                                <CardGallery data={filteredData} isBest={isBest} />
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default BestSection;