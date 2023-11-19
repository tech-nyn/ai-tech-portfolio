

import React from "react";

function PortfolioCard({ image}) {

    return (
        <>
            <div className="porfolio-card-container">
                <img className="portfolio-card-img" src={image} />
            </div>
        </>
    );
}



export default PortfolioCard;