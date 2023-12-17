import React, { useState, useEffect, useMemo, useCallback } from "react";
import Nav from "../Navbar";
import AddForm from "../AddForm";
import Button from "../button";
import "./index.css";
import Bug from "../Bug";
import Filter from "../Filter";
import Search from "../Search";

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
        console.log('success', JSON.stringify(newBugItem, null, 2));
        let updatedBugs;
        if (editIndex !== null) {
            updatedBugs = [...bugData];
            const index = updatedBugs.findIndex((update) => (update.id === editIndex));
            updatedBugs[index] = newBugItem
            setEditIndex(null);
        } else {
            updatedBugs = [...bugData, newBugItem];
        }

        setBugData(updatedBugs);
        localStorage.setItem('bugs', JSON.stringify(updatedBugs));
        setShowModal(false);
    };

    // console.log('aa', bugData);

    // const deleteBug = (index) => {
    //     const updatedBugs = [...bugData];
    //     updatedBugs.splice(index, 1);
    //     setBugData(updatedBugs);
    //     localStorage.setItem('bugs', JSON.stringify(updatedBugs));
    // };

    const deleteBug = (id) => {
        const updatedBugs = bugData.filter((bug) => bug.id !== id);
        setBugData(updatedBugs);
        localStorage.setItem('bugs', JSON.stringify(updatedBugs));
    };


    const editItem = (id) => {
        // console.log('id', id);
        setEditIndex(id);
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
    const filteredList = useMemo(() => {
        if (!filter) {
            return bugData;
        }
        const filteredBugs = bugData.filter((bug) => bug.priority.toLowerCase() === filter.toLowerCase());
        return filteredBugs;

        // return console.log("Filter bhayo")

    }, [filter, bugData])

    const [searchData, setSearchData] = useState('');

    const handleChangeSearch = (event) => {
        setSearchData(event.target.value);
        console.log(event.target.value);

    }
    const searchList = useMemo(() => {
        if (!searchData) {
            return bugData;
        }
        const searchedBugs = bugData.filter((bug) => bug.project.toLowerCase().includes(searchData) || bug.title.toLowerCase().includes(searchData) || bug.desc.toLowerCase().includes(searchData));
        return searchedBugs;

        // return console.log("Filter bhayo")

    }, [searchData, bugData])

    const combinedData = useMemo(() => {
        return filteredList.filter(bug => {
            return searchList.some(searchedBug => searchedBug.id === bug.id);
        });
    }, [filteredList, searchList]);





    const bugToEdit = useMemo(() => {
        return bugData.find((bug) => bug.id === editIndex)
    }, [bugData, editIndex]);

    // const totalBugs = bugData.length;
    // console.log("Buglist", totalBugs);

    return (
        <>
            <div className="total">
                <Nav />
                <div className="aside">
                    <div className="container">
                        <div className="btn">
                            <div><h1>Bug list</h1></div>
                            <Search onChange={handleChangeSearch} />
                            <Filter onChange={handleChangeFilter} />
                            <Button onClick={toggleModal} title="Report a bug" />
                            {showModal && (
                                <div className="modal">
                                    <div className="modal-content">
                                        <span className="close" onClick={toggleModal}>&times;</span>
                                        <AddForm
                                            onAddSuccess={onAddSuccess}
                                            bugToEdit={editIndex !== null ? bugToEdit : null}
                                            updateBug={updateBug}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                        {combinedData.length > 0 ? (
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
                                    {combinedData.map((bug) => (
                                        <Bug
                                            bug={bug}
                                            key={bug.id}
                                            deleteBug={deleteBug}
                                            editItem={editItem}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <div className="nobugs"><p>Woohoo!! No Bugs!</p></div>

                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default BugList;

