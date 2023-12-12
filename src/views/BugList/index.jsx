// import React, { useState, useEffect } from "react";
// import Nav from "../Navbar";
// import Side from "../aside";
// import AddForm from "../AddForm";
// import Button from "../button";
// import "./index.css";
// import Bug from "../Bug";

// function BugList() {
//     const [bugData, setBugData] = useState(() => {
//         const storedBugs = localStorage.getItem('bugs');
//         if (storedBugs !== undefined && storedBugs !== null) {
//             return JSON.parse(localStorage.getItem('bugs'));
//         }
//         return [];
//     });

//     const [editIndex, setEditIndex] = useState(null);



//     const onAddSuccess = (newBugItem) => {
//         let updatedBugs;
//         if (editIndex !== null) {

//             updatedBugs = [...bugData];
//             updatedBugs[editIndex] = newBugItem;
//             setEditIndex(null);
//         } else {
//             updatedBugs = [...bugData, newBugItem];
//         }

//         setBugData(updatedBugs);
//         localStorage.setItem('bugs', JSON.stringify(updatedBugs));
//         setShowModal(false);
//     };

//     const [showModal, setShowModal] = useState(false);

//     const toggleModal = () => {
//         setShowModal(!showModal);
//     };

//     const deleteBug = (index) => {
//         const updatedBugs = [...bugData];
//         updatedBugs.splice(index, 1);
//         setBugData(updatedBugs);
//         localStorage.setItem('bugs', JSON.stringify(updatedBugs));
//     };

//     const editItem = (index, bug) => {

//         setEditIndex(index);
//         toggleModal();
//     }

//     return (
//         <>
//             <div className="total">
//                 <Nav />
//                 <div className="aside">
//                     {/* <div className="as"><Side /></div> */}

//                     <div className="container">
//                         <div className="btn">
//                             <div><h1>Bug list</h1></div>
//                             <Button onClick={toggleModal} title="Report a bug" />
//                             {showModal && <div className="modal">
//                                 <div className="modal-content">
//                                     <span className="close" onClick={toggleModal}>&times;</span>
//                                     <AddForm onAddSuccess={onAddSuccess} />
//                                 </div>
//                             </div>
//                             }
//                         </div>
//                         {bugData.length > 0 ? (<table className="category-table">
//                             <thead>
//                                 <tr>
//                                     <th>Project</th>
//                                     <th>Title</th>
//                                     <th>Description</th>
//                                     <th>Priority</th>
//                                     <th>Status</th>
//                                     <th>Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {bugData && bugData.map((bug, index) => (
//                                     <Bug bug={bug} index={index} deleteBug={deleteBug} editItem={editItem} key={index} />
//                                 ))}
//                             </tbody>
//                         </table>) : (<p>No Bugs!</p>)}

//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default BugList;


// import React, { useState, useEffect } from "react";
// import Nav from "../Navbar";
// import Side from "../aside";
// import AddForm from "../AddForm";
// import Button from "../button";
// import "./index.css";
// import Bug from "../Bug";

// function BugList() {
//     const [bugData, setBugData] = useState(() => {
//         const storedBugs = localStorage.getItem('bugs');
//         if (storedBugs !== undefined && storedBugs !== null) {
//             return JSON.parse(localStorage.getItem('bugs'));
//         }
//         return [];
//     });



//     const onAddSuccess = (newBugItem) => {
//         const newData = [...bugData, newBugItem];
//         setBugData(newData);
//         localStorage.setItem('bugs', JSON.stringify(newData));
//         setShowModal(false);
//     };



//     const [showModal, setShowModal] = useState(false);

//     const toggleModal = () => {
//         setShowModal(!showModal);
//     };

//     const deleteBug = (index) => {
//         const updatedBugs = [...bugData];
//         updatedBugs.splice(index, 1);
//         setBugData(updatedBugs);
//         localStorage.setItem('bugs', JSON.stringify(updatedBugs));
//     };

//     return (
//         <>
//             <div className="total">
//                 <Nav />
//                 <div className="aside">
//                     {/* <div className="as"><Side /></div> */}
//                     <div className="container">
//                         <div className="btn">
//                             <div><h1>Bug list</h1></div>
//                             <Button onClick={toggleModal} title="Report a bug" />
//                         </div>
//                         {showModal && <div className="modal">
//                             <div className="modal-content">
//                                 <span className="close" onClick={toggleModal}>&times;</span>
//                                 <AddForm onAddSuccess={onAddSuccess} />
//                             </div>
//                         </div>
//                         }
//                         {bugData.length > 0 ? (<table className="category-table">
//                             <thead>
//                                 <tr>
//                                     <th>Project</th>
//                                     <th>Title</th>
//                                     <th>Description</th>
//                                     <th>Priority</th>
//                                     <th>Status</th>
//                                     <th>Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {bugData && bugData.map((bug, index) => (
//                                     <Bug bug={bug} index={index} deleteBug={deleteBug} key={index} />
//                                 ))}
//                             </tbody>
//                         </table>) : (<p>No Bugs!</p>)}

//                     </div>

//                     {/* </div> */}
//                 </div>
//             </div>
//         </>
//     )
// }

// export default BugList;

import React, { useState, useEffect } from "react";
import Nav from "../Navbar";
import AddForm from "../AddForm";
import Button from "../button";
import "./index.css";
import Bug from "../Bug";

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

    return (
        <>
            <div className="total">
                <Nav />
                <div className="aside">
                    <div className="container">
                        <div className="btn">
                            <div><h1>Bug list</h1></div>
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
                        {bugData.length > 0 ? (
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
                                    {bugData.map((bug, index) => (
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

