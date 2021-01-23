import React from "react";
import SkewLoader from "react-spinners/SkewLoader";

export const LoadingSpinner = () => {
    return (
        <div className="loader-wrapper">
            <div className="loader-animation">
                <SkewLoader color="#74C7E5"/>
            </div>
            <span className="loading-text">
                L O A D I N G
            </span>
        </div>
    )
}