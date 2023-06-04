//Detail Component
import React from 'react';

//Import CSS
import './index.css';


const Detail = ({ item, index }) => {
    return (
        <div className="img-wrap-details">
            {item.type === 'video' ?
                <>
                    <video src={item.src} autoPlay loop muted className="rounded img-details" alt={`${item.category}+${index}`} />
                    <span className="img-text-details text-capitalize">{item.name}</span>
                </>
                : 
                <>
                    <img src={item.src} className="img-details" alt={`${item.category}+${index}`} />
                    <span className="img-text-details text-capitalize">{item.name}</span>
                </>
            }
        </div>
    );
}

export default Detail;