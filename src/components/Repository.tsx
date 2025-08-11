import React from "react";
import './Repository.css';

const Repository = (props) => {
    if (!props) {
        return null;
    }

    return (
        <>
            <div className="repository">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <a href={props.url} target="_blank" rel="noopener noreferrer">View Repository</a>
            </div>
        </>
    )
}

export default Repository;