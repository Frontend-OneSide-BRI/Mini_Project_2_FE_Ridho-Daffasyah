import React from 'react';

//Import Components
import CardPhoto from '../CardPhoto';
import CardVideo from '../CardVideo';

const CardGallery = ({ data, category, isSearch, isBest }) => {
  
  const filteredData = data.filter(item => category === 'All' || item.category === category);

  return (
        <div className="row px-5 pb-5">
          {!isSearch && filteredData
              .map((item, index) => {
                  if (item.type === 'image') {
                      return <CardPhoto key={index} index={index} name={item.name} src={item.src} category={item.category} />
                  } else {
                      return <CardVideo key={index} index={index} name={item.name} src={item.src} category={item.category} />
                  }
              })}
           {(isBest || isSearch) && data
            .map((item, index) => {
                if (item.type === 'image') {
                return <CardPhoto key={index} index={index} name={item.name} src={item.src} category={item.category} />
                } else {
                return <CardVideo key={index} index={index} name={item.name} src={item.src} category={item.category} />
                }
            }) 
            }
        </div>
    );
    
};

export default CardGallery;
