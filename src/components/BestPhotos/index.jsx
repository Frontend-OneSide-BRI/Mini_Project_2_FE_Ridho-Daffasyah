//Best Photos Component
import React from 'react';

//Import CSS
import "./index.css";

//Import Component
import CardBestPhotos from '../CardBestPhotos';

//Import js
import { filterData } from '../../utils/core';

const BestPhotos = ({data}) => {
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
                                <CardBestPhotos data={filteredData} />
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default BestPhotos;