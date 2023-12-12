// import React from "react";
// import Button from "../button";
// import "./index.css";


// function Bug(props) {
//     const {
//         bug,
//         index,
//         deleteBug,


//     } = props;
//     return (
//         <>
//             <tr key={index}>
//                 <td>{bug.project}</td>
//                 <td>{bug.title}</td>
//                 <td>{bug.desc}</td>
//                 <td>{bug.priority}</td>
//                 <td>{bug.status}</td>

//                 <td><div className="btns"><Button onClick={() => deleteBug(index)} title="Delete" />
//                     <Button title="Edit" /></div>

//                     {/* <Button title="Edit" /> */}

//                 </td>

//             </tr>
//         </>

//     );
// }

// export default Bug;

import React from "react";
import Button from "../button";
import "./index.css";

function Bug(props) {
    const { bug, index, deleteBug, editItem } = props;

    return (
        <tr key={index}>
            <td>{bug.project}</td>
            <td>{bug.title}</td>
            <td>{bug.desc}</td>
            <td>{bug.priority}</td>
            <td>{bug.status}</td>
            <td>
                <div className="btns">
                    <Button onClick={() => deleteBug(index)} title="Delete" />
                    <Button onClick={() => editItem(index, bug)} title="Edit" />
                </div>
            </td>
        </tr>
    );
}

export default Bug;


