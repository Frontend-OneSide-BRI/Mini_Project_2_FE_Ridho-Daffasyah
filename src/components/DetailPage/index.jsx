//Detail Page
import React from 'react'

//Import CSS
import './index.css';

//Import Components
import NavbarComponent from '../Navbar';
import Detail from '../Detail';
import RelatedSection from '../RelatedSection';

const DetailPage = ({ data, item, index }) => {
    console.log(item)
    return (
        <div className='section-top-detail'>
            <NavbarComponent />
            <section className="section-detail">
                <div id="img-details" className='img-details'>
                    <Detail item={item} index={index} />
                </div>
                <div
                    className="content-detail"
                >
                    <h2 className="text-sm font-bold mb-4">Get the {(item.type === "image") ? "Image" : "Video"} for Free!</h2>
                    <button type="button" className="btn btn-warning" id="btn-download">
                    <div className="flex justify-center items-center">
                        <h2 className="txt-btn">Download</h2>
                    </div>
                    </button>
                </div>
            </section>
            <RelatedSection data={data} category={item.category} index={index} />
        </div>
    );
}

export default DetailPage;