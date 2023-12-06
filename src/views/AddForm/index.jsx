import React from "react";
import "./index.css"

function AddForm() {
    return (

        <>

            <div className="form-input">
                <input type="text" className="inp" placeholder="Title" />
                <input type="text" className="inp" placeholder="Project" />
                <input type="text" className="inp" placeholder="Priority" />
                <textarea name="desc" id="desc" cols="30" rows="10" placeholder="Description"></textarea>


            </div>
            <button className="add-btn">Add</button>


        </>


    )
}

export default AddForm;