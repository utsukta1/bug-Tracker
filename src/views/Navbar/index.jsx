import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <>
            <div className="nav">
                <div className="nav-btns">
                    <Link to="/">Home</Link>
                    <Link to="/dashboard">Dashboard</Link>
                </div>
            </div>
        </>
    );
}

export default Nav;
