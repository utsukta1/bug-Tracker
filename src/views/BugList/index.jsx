import React, { useState, useEffect, useMemo } from "react";
import Nav from "../Navbar";
import AddForm from "../AddForm";
import Button from "../button";
import "./index.css";
import Bug from "../Bug";
import Filter from "../Filter";

function BugList() {
    const [bugData, setBugData] = useState(() => {
        const storedBugs = localStorage.getItem('bugs');
        return storedBugs ? JSON.parse(storedBugs) : [];
    });

    const [editIndex, setEditIndex] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const onAddSuccess = (newBugItem) => {
        let updatedBugs;
        if (editIndex !== null) {
            updatedBugs = [...bugData];
            updatedBugs[editIndex] = newBugItem;
            setEditIndex(null);
        } else {
            updatedBugs = [...bugData, newBugItem];
        }

        setBugData(updatedBugs);
        localStorage.setItem('bugs', JSON.stringify(updatedBugs));
        setShowModal(false);
    };

    const deleteBug = (index) => {
        const updatedBugs = [...bugData];
        updatedBugs.splice(index, 1);
        setBugData(updatedBugs);
        localStorage.setItem('bugs', JSON.stringify(updatedBugs));
    };

    const editItem = (index, bug) => {
        setEditIndex(index);
        toggleModal();
    };

    const updateBug = (bug) => {
        onAddSuccess(bug);
    };



    const [filter, setFilter] = useState('');

    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
        console.log(event.target.value);

    }
    const getFilteredList = () => {
        if (!filter) {
            return bugData;
        }
        const filteredBugs = bugData.filter((bug) => bug.priority.toLowerCase() === filter.toLowerCase());
        return filteredBugs;

        // return console.log("Filter bhayo")

    }

    var filteredList = useMemo(getFilteredList, [filter, bugData]);



    return (
        <>
            <div className="total">
                <Nav />
                <div className="aside">
                    <div className="container">
                        <div className="btn">
                            <div><h1>Bug list</h1></div>
                            <Filter handleChangeFilter={handleChangeFilter} />
                            <Button onClick={toggleModal} title="Report a bug" />
                            {showModal && (
                                <div className="modal">
                                    <div className="modal-content">
                                        <span className="close" onClick={toggleModal}>&times;</span>
                                        <AddForm
                                            onAddSuccess={onAddSuccess}
                                            bugToEdit={editIndex !== null ? bugData[editIndex] : null}
                                            updateBug={updateBug}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                        {filteredList.length > 0 ? (
                            <table className="category-table">
                                <thead>
                                    <tr>
                                        <th>Project</th>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Priority</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredList.map((bug, index) => (
                                        <Bug
                                            bug={bug}
                                            index={index}
                                            key={index}
                                            deleteBug={deleteBug}
                                            editItem={editItem}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p>No Bugs!</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default BugList;

