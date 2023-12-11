import React, { useState, useEffect } from "react";
import Nav from "../Navbar";
import Side from "../aside";
import AddForm from "../AddForm";
import Button from "../button";
import "./index.css";

function BugList() {
    const [bugData, setBugData] = useState(() => {
        const storedBugs = localStorage.getItem('bugs');
        if (storedBugs !== undefined && storedBugs !== null) {
            return JSON.parse(localStorage.getItem('bugs'));
        }
        return [];
    });



    const onAddSuccess = (newBugItem) => {
        const newData = [...bugData, newBugItem];
        setBugData(newData);
        localStorage.setItem('bugs', JSON.stringify(newData));
        setShowModal(false);
    };







    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const deleteBug = (index) => {
        const updatedBugs = [...bugData];
        updatedBugs.splice(index, 1);
        setBugData(updatedBugs);
        localStorage.setItem('bugs', JSON.stringify(updatedBugs));
    };

    return (
        <>
            <div className="total">
                <Nav />
                <div className="aside">
                    <div className="as"><Side /></div>
                    <div className="container">
                        <div className="btn">
                            <div><h1>Bug list</h1></div>
                            <Button onClick={toggleModal} title="Report a bug" />
                            {showModal && <div className="modal">
                                <div className="modal-content">
                                    <span className="close" onClick={toggleModal}>&times;</span>
                                    <AddForm onAddSuccess={onAddSuccess} />
                                </div>
                            </div>
                            }
                        </div>
                        <table className="category-table">
                            <thead>
                                <tr>
                                    <th>Project</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Priority</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bugData && bugData.map((bug, index) => (
                                    <tr key={index}>
                                        <td>{bug.project}</td>
                                        <td>{bug.title}</td>
                                        <td>{bug.desc}</td>
                                        <td>{bug.priority}</td>
                                        {/* <td><button onClick={() => deleteBug(index)}>Delete</button></td> */}
                                        <td><Button onClick={() => deleteBug(index)} title="Delete" />

                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BugList;