import React from "react";
import "./index.css"

function Search(props) {
    const {
        onChange
    } = props;
    return (
        <>

            <div>
                <input className="search-class" type="text" placeholder="Search" onChange={onChange} />

            </div>






        </>
    )
}

export default Search;