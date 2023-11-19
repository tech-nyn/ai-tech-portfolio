
import React from "react";


function StatCard({statCount, description}) {

    return (
        <div className="stat-card">
            <p className="card-value-cound">{ statCount }</p>
            <p className="card-text">{ description }</p>
        </div>
    );
}

export default StatCard;