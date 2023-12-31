import React from "react";
import Button from "../button";
import "./index.css";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";

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
                    {/* <Button onClick={() => { if (window.confirm("Delete the Item?")) deleteBug(bug.id) }} title="Delete" />
                    <Button onClick={() => editItem(bug.id)} title="Edit" /> */}
                    <RiEdit2Line onClick={() => editItem(bug.id)} title="Edit" />
                    <RiDeleteBin6Line onClick={() => { if (window.confirm("Delete the Item?")) deleteBug(bug.id) }} title="Delete" />

                </div>
            </td>
        </tr>
    );
}

export default Bug;


