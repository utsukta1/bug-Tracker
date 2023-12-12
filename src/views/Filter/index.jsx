import React, { useState } from "react";
import "./index.css"

function Filter(props) {
    const {
        filter, onChange

    } = props

    return (
        <>
            <div className="filter-options"> Filter by priority
                <select name="filter" value={filter} onChange={onChange}>
                    <option value="">-----</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select></div>


        </>
    )
}

export default Filter;