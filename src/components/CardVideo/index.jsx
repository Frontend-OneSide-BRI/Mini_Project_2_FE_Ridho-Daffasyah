//Video Card Component
import React from 'react';

//Import CSS
import './index.css';

const CardVideo = ({ index, name, src, category }) => {
    return (
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 img-wrap p-3" key={index}>
            <div className="card rounded">
                <video src={src} autoPlay loop muted className="rounded video-each-category img-img" alt={`${category}+${index}`} />
                <a href={`/detail/${name}`} >
                    <span className="img-text text-capitalize">{name}</span>
                </a>
            </div>
        </div>
    );
};

export default CardVideo;