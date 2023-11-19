

import React from "react";


function IconButton({label, icon, callBack}) {

    return (
        <button className="icon-button" onClick={ callBack }>
            <p>{ label }</p>
            <img className="icon-button-icon" src={ icon }></img>
        </button>
    );
}

export default IconButton;