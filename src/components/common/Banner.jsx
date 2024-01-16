import React from "react";

const Banner = ({ status, children }) => {
    return (
        <div className={`${status} banner`}>{children}</div>
    )
}

export default Banner