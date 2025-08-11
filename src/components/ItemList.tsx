import React from "react";
import Repository from "./Repository";

const ItemList = (props) => {

    return (
        <>
            <div>
                <h1>
                    Trending Repositories
                </h1>
            </div>
            <ul className="list">
                {props?.items?.map((item, index) => (
                    <li key={index} className="list-item">
                        <Repository repo={item}/>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ItemList;