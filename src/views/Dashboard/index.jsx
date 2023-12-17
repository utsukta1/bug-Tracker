import Nav from "../Navbar";
import React from "react";
import "./index.css"
// import { useLocation } from "react-router-dom";

function Dashboard() {

    return (
        <>
            <Nav />
            <div className="dashboard-title"><h1>Dashboard</h1></div>

            <div className="dashboard-bugs">
                <div className="card">
                    <h2 className="card-title">Total Bugs</h2>
                    <p className="card-content">
                        totalbugs
                    </p>
                </div>

                <div className="card">
                    <h2 className="card-title">High Priority</h2>
                    <p className="card-content">
                        high p
                    </p>
                </div>
                <div className="card">
                    <h2 className="card-title">Medium Priority</h2>
                    <p className="card-content">
                        midp
                    </p>
                </div>
                <div className="card">
                    <h2 className="card-title">Low Priority</h2>
                    <p className="card-content">
                        lowp
                    </p>
                </div>
            </div>
        </>
    )
}
export default Dashboard;