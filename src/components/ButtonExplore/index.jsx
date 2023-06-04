//Button Explore Component
import React from 'react';

//Import CSS
import './index.css';

const ButtonExplore = () => {
    const handleButton = (e) => {
        //Click scroll to section best
        const bestSection = document.getElementById("bestImages");
        bestSection.scrollIntoView({ behavior: "smooth" });
        e.preventDefault();
    };

    return (
        <div className="btn-explore">
            <button
                className="btn btn-warning btn-lg text-light fw-bold"
                id="btn-explore"
                onClick={handleButton}
            >
                Explore
            </button>
        </div>
    );
};

export default ButtonExplore;