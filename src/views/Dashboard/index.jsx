import Nav from "../Navbar";
import React from "react";
import "./index.css"
import Stats from "../stats";
import { useState, useEffect } from "react";

import { Bar, Pie } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js/auto";


// import { useLocation } from "react-router-dom";

function Dashboard() {
    const [bugData, setBugData] = useState(() => {
        const storedBugs = localStorage.getItem('bugs');
        return storedBugs ? JSON.parse(storedBugs) : [];
    });

    function handleReducer(array, key, match) {
        return array.reduce((total, bug) => {
            if (bug[key] === match) {
                return total + 1;
            }
            return total;
        }, 0)
    }
    const noOfHighPriority = handleReducer(bugData, "priority", "high");
    const noOfMediumPriority = handleReducer(bugData, "priority", "medium");
    const noOfLowPriority = handleReducer(bugData, "priority", "low");



    return (
        <>
            <Nav />

            <div className="dashboard-title"><h1>Dashboard</h1></div>
            <Stats bugData={bugData} />

            <div className="chart-container">
                <div className="barchart">
                    <Bar
                        data={{
                            labels: ["high", "medium", "low"],
                            datasets: [{
                                label: "no. of bugs",
                                data: [noOfHighPriority, noOfMediumPriority, noOfLowPriority],
                                backgroundColor: ["rgb(250, 169, 163)", "rgb(248, 205, 118)", "rgb(167, 240, 83)"]
                            },],
                        }}
                        options={{
                            indexAxis: "y",
                            responsive: true,
                            maintainAspectRatio: false,
                            scales: {
                                x: {
                                    grid: {
                                        display: false
                                    }
                                },
                                y: {
                                    grid: {
                                        display: false
                                    }
                                }
                            }
                        }} />


                </div>

                <div className="pie-chart">
                    <Pie
                        data={{
                            labels: ["high", "medium", "low"],
                            datasets: [
                                {
                                    label: "No of Bugs",
                                    data: [
                                        noOfHighPriority, noOfMediumPriority, noOfLowPriority
                                    ],
                                    backgroundColor: ["rgb(250, 169, 163)", "rgb(248, 205, 118)", "rgb(167, 240, 83)"]

                                },
                            ],
                        }}
                        options={{
                            responsive: true,

                            maintainAspectRatio: false,
                        }}
                    />
                </div>
            </div>



        </>
    )
}
export default Dashboard;

