import React from "react";
import Nav from "../Navbar";
import Side from "../aside";
import "./buglist.css";



function BugList() {
    return (
        <>

            <div className="total">
                <Nav />

                <div className="aside">
                    <div>Bug List</div>

                    <Side />

                </div>


            </div>




        </>


    )
}

export default BugList;