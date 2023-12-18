import React, { useState } from "react";
import "./index.css"

function Filter(props) {
    const {
        filter, onChange, value

    } = props

    return (
        <>
            <div className="filter-options">
                <select name="filter" value={value} onChange={onChange}>
                    <option value="">--Select Priority--</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select></div>


        </>
    )
}

export default Filter;