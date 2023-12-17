import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import profpic from "../../assets/profpic.png";


function Nav() {

    return (
        <>
            <div className="nav">
                <div className="nav-align">
                    <div className="nav-btns">
                        <Link to="/">Home</Link>
                        <Link to={{ pathname: "/dashboard" }}>Dashboard</Link>


                    </div>
                    <div className="account">
                        <div className="account-pic">
                            <img src={profpic} alt="img" width="100%" height="100%" />
                        </div>
                        <div className="account-name">
                            Utsukta Parajuli
                        </div>
                    </div>
                </div>

            </div >
        </>
    );
}

export default Nav;
