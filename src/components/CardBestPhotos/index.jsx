//Card Photos component
import React from 'react';

//Import CSS
import "./index.css";

const CardBestPhotos = ({ data }) => {
    return (
        <div className="row">
            {data
                .map((item, index) => {
                    if (item.type === "image") {
                        return (
                            <div key={index}  className="col-12 col-sm-6 col-lg-4 col-xl-3 img-wrap p-3" id="img-link">
                                <div className="card">
                                    <img src={`${item.src}`} className="rounded img-each-category img-img" alt={`${item.category}+${index}`} />
                                    <span className="img-text text-capitalize">{item.name}</span>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div key={index} className="col-12 col-sm-6 col-lg-4 col-xl-3 img-wrap p-3" id="img-link">
                                <div className="card rounded">
                                    <video src={`${item.src}`} autoPlay loop muted className="rounded video-each-category img-img" id="video-each-category" alt={`${item.category}+${index}`} />
                                    <span className="video-text text-capitalize">{item.name}</span>
                                </div>
                            </div>
                        )
                    }
                })}
        </div>
    )
}

export default CardBestPhotos;