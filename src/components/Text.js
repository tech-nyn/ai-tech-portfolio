


import React from "react";

function Text({ isParagrapgh, isDark, text, isBold, size }) {

    const style = {
        color: isDark ? "#757070" : "#c6c6c6",
        // fontSize: size ? `${size}px` : "14px",
        fontSize: size ? `${size}px` : "",
        fontWeight: isBold ? "bold" : "normal"
    }

    return (
        <p style={ style }>{ text }</p>
    );
}

export default Text;