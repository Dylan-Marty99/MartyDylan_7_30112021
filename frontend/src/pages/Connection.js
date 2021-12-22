import React from 'react';
import Log from "../components/Log"

const Connection = () => {
    return (
        <div className="connection-page">
            <div className="log-container">
                <Log />
                <div className="img-container">
                    <img src="./img/log.svg" alt="Ordinateur vérrouillé" />
                </div>
            </div>
        </div>
    );
};

export default Connection;