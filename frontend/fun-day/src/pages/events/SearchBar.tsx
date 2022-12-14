import React from "react";
import { Input } from "../../components/Input";
import "./SearchBar.css";
import {useRecoilState} from 'recoil';
import { searchState } from "../../atoms/searchState";

export const SearchBar = () => {
    const [search, setSearch] = useRecoilState(searchState);

    return (
        <div className="search-bar-component">
            <div className="sort-by">
                <div className="category">
                    <select>
                        <option>
                            Name
                        </option>
                    </select>
                </div>
                <div className="order">
                    <div>
                        <label>Asc</label>
                        <input type="radio" />
                    </div>
                    <div>
                        <label>Desc</label>
                        <input type="radio"/>
                    </div>
                </div>
            </div>
            <div>
            </div>
            <div className="search-input">
                <Input chosenClass="outline"
                    placeholder="Seacrh..." 
                    isSearchInput={true}
                    onChange={(event) => setSearch(event.target.value)}
                    />
            </div>
        </div>
    );
}