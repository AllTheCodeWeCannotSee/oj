import React from 'react';
import './Loading.css';
import Loader from "./Loader";

const LoadingView = () => {
    return (
        <div className="loading-container">
            <Loader/>
        </div>
    );
};

export default LoadingView;
