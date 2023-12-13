import Nav from "../Navbar";
import React from "react";
import "./index.css"

function Dashboard() {
    return (
        <>
            <Nav />
            <div className="dashboard-title"><h1>Dashboard</h1></div>

            <div className="dashboard-bugs">
                <div>Opened Bugs</div>
                <div>Closed Bugs</div>
            </div>
        </>
    )
}
export default Dashboard;