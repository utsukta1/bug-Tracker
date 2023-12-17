import React from "react";
import "./index.css"

function Stats(props) {
    const {
        bugData
    } = props;

    const totalBugs = bugData.length;

    const totalHigh = bugData.reduce((total, bug) => {
        if (bug.priority === "high") {
            return total + 1;
        }
        return total;

    }, 0);
    const totalMedium = bugData.reduce((total, bug) => {
        if (bug.priority === "medium") {
            return total + 1;
        }
        return total;

    }, 0);
    const totalLow = bugData.reduce((total, bug) => {
        if (bug.priority === "low") {
            return total + 1;
        }
        return total;

    }, 0);


    return (
        <>
            <div className="dashboard-bugs">
                <div className="card">
                    <h2 className="card-title">Total Bugs</h2>
                    <p className="card-content">
                        {totalBugs}
                    </p>
                </div>

                <div className="card">
                    <h2 className="card-title">High Priority</h2>
                    <p className="card-content">
                        {totalHigh}
                    </p>
                </div>
                <div className="card">
                    <h2 className="card-title">Medium Priority</h2>
                    <p className="card-content">
                        {totalMedium}
                    </p>
                </div>
                <div className="card">
                    <h2 className="card-title">Low Priority</h2>
                    <p className="card-content">
                        {totalLow}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Stats;