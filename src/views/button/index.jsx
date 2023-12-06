// import React from "react";
// import { useState } from "react";
// import addForm from "../AddForm";

// import "./index.css";

// function Btn() {


//     return (
//         <>
//             <button className="b" onClick={addForm}>Report a bug</button>
//         </>

//     )
// }



// export default Btn;

import React, { useState } from "react";
import AddForm from "../AddForm"; // Assuming AddForm is a component to display the form

import "./index.css";

function Btn() {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            <button className="b" onClick={toggleModal}>Report a bug</button>
            {showModal && <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={toggleModal}>&times;</span>
                    <AddForm />
                </div>
            </div>}
        </>
    );
}

export default Btn;



