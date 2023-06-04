import React from 'react';
import Tab from 'react-bootstrap/Tab';

const CardPhotos = ({ data, category }) => {
  return (
        <Tab.Content>
          <Tab.Pane
            className="fade show active"
            id={`nav-${category}`}
            role="tabpanel"
            aria-labelledby={`nav-${category}-tab`}
            eventKey={category}
          >
            <div className="row px-5 pb-5">
              {data
                .filter(item => category === 'All' || item.category === category)
                .map((item, index) => {
                  if (item.type === 'image') {
                    return (
                      <div className="col-12 col-sm-6 col-lg-4 col-xl-3 img-link img-wrap p-3" key={index}>
                        <div className="card">
                          <img src={item.src} className="rounded img-each-category img-img" alt={`${item.category}+${index}`} />
                          <span className="img-text text-capitalize">{item.name}</span>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div className="col-12 col-sm-6 col-lg-4 col-xl-3 img-wrap p-3" key={index}>
                        <div className="card rounded">
                          <video src={item.src} autoPlay loop muted className="rounded video-each-category img-img" alt={`${item.category}+${index}`} />
                          <span className="img-text text-capitalize">{item.name}</span>
                        </div>
                      </div>
                    );
                  }
                })}
            </div>
          </Tab.Pane>
        </Tab.Content>
    );
    
};

export default CardPhotos;
