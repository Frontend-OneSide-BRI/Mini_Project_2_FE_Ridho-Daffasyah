//Card Photo Component
import React from 'react';

//Import CSS
import './index.css';

const CardPhoto = ({index, name, src, category}) => {
    return (
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 img-wrap p-3">
            <div className="card">
                <img src={src} className="rounded img-each-category" alt={`${category}+${index}`} />
                <a href={`/detail/${name}`} >
                    <span className="img-text text-capitalize">{name}</span>
                </a>
            </div>
        </div>
    );
};

export default CardPhoto;