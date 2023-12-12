import React from "react";
import Button from "../button";
import "./index.css";

function Bug(props) {
    const { bug, deleteBug, editItem } = props;

    return (
        <tr>
            <td>{bug.project}</td>
            <td>{bug.title}</td>
            <td>{bug.desc}</td>
            <td>{bug.priority}</td>
            <td>{bug.status}</td>
            <td>
                <div className="btns">
                    <Button onClick={() => deleteBug(bug.id)} title="Delete" />
                    <Button onClick={() => editItem(bug.id)} title="Edit" />
                </div>
            </td>
        </tr>
    );
}

export default Bug;


