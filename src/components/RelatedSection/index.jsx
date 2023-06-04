//Related Section
import React from 'react';

//Import CSS
import './index.css';

//Import Component
import CardGallery from '../CardGallery';

const RelatedSection = ({ data, category, index }) => {
    return (
        <section>
            <div>
                <div className="row px-5 pt-5">
                <h3 className="text-left title-best">Related Images</h3>
                </div>
                <div className="row" id="related-images">
                    <CardGallery data={data} index={index} category={category} isSearch={false}/>
                </div>
            </div>
        </section>
    );
}

export default RelatedSection;