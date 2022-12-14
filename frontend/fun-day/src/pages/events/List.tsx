import React from "react";
import "./List.css";
import { SearchBar } from "./SearchBar";

export const List = () => {

    return (
        <>
            <div className="search-bar">
                <SearchBar/>
            </div>
            <div className="content">
                <div className="filter-column">

                </div>
                <div className="list">
                    {}
                </div>
            </div>
        </>
    );
}