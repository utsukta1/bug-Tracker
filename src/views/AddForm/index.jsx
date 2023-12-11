import React, { useState } from "react";
import Button from "../button";
import "./index.css";

function AddForm(props) {
    const { onAddSuccess } = props;
    const initialFormState = {
        title: '',
        project: '',
        priority: '',
        desc: '',
        errors: {
            title: '',
            project: '',
            priority: '',
            desc: ''
        }
    };

    const [formState, setFormState] = useState(initialFormState);

    const saveData = () => {
        const { title, project, priority, desc } = formState;

        const errors = {
            title: title ? '' : 'Title is required',
            project: project ? '' : 'Project is required',
            priority: priority ? '' : 'Priority is required',
            desc: desc ? '' : 'Description is required'
        };

        if (Object.values(errors).some(error => error)) {
            setFormState({ ...formState, errors });
            return;
        }

        const bug = {
            title,
            project,
            priority,
            desc
        };

        onAddSuccess(bug);

        setFormState(initialFormState);
    };

    return (
        <>
            <form>
                <div className="form-input">
                    <input
                        type="text"
                        className="inp"
                        value={formState.title}
                        onChange={(e) => setFormState({ ...formState, title: e.target.value })}
                        placeholder="Title"
                    />
                    {formState.errors.title && <span className="error">{formState.errors.title}</span>}
                    <input
                        type="text"
                        className="inp"
                        value={formState.project}
                        onChange={(e) => setFormState({ ...formState, project: e.target.value })}
                        placeholder="Project"
                    />
                    {formState.errors.project && <span className="error">{formState.errors.project}</span>}
                    <input
                        type="text"
                        className="inp"
                        value={formState.priority}
                        onChange={(e) => setFormState({ ...formState, priority: e.target.value })}
                        placeholder="Priority"
                    />
                    {formState.errors.priority && <span className="error">{formState.errors.priority}</span>}
                    <textarea
                        name="desc"
                        id="desc"
                        cols="30"
                        rows="10"
                        value={formState.desc}
                        onChange={(e) => setFormState({ ...formState, desc: e.target.value })}
                        placeholder="Description"
                    ></textarea>
                    {formState.errors.desc && <span className="error">{formState.errors.desc}</span>}
                </div>
                <Button onClick={saveData} title="Add" />
            </form>
        </>
    );
}

export default AddForm;



