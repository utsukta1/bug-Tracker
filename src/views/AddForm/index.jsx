import React, { useState, useEffect } from "react";
import Button from "../button";
import "./index.css";
import Filter from "../Filter";

function AddForm(props) {
    const { onAddSuccess, bugToEdit, updateBug } = props;
    const [formState, setFormState] = useState({
        id: Date.now(),
        title: '',
        project: '',
        priority: '',
        desc: '',
        status: '',
        errors: {
            title: '',
            project: '',
            priority: '',
            desc: '',
            status: ''
        }
    });
    const handleChangeFilter1 = (event) => {
        const { value } = event.target;
        if (value.trim() === '') {
            setFormState({
                ...formState,
                priority: '',
                errors: {
                    ...formState.errors,
                    priority: 'Priority is required',
                },
            });
        } else {
            setFormState({
                ...formState,
                priority: value,
                errors: {
                    ...formState.errors,
                    priority: '',
                },
            });
        }
    };

    useEffect(() => {
        if (bugToEdit) {
            setFormState({
                ...formState,
                id: bugToEdit.id || '',
                title: bugToEdit.title || '',
                project: bugToEdit.project || '',
                priority: bugToEdit.priority || '',
                desc: bugToEdit.desc || '',
                status: bugToEdit.status || ''
            });
        }
    }, [bugToEdit]);

    const saveData = (event) => {
        event.preventDefault();

        const { id, title, project, priority, desc, status } = formState;


        const errors = {
            title: title ? '' : 'Title is required',
            project: project ? '' : 'Project is required',
            priority: priority ? '' : 'Priority is required',
            desc: desc ? '' : 'Description is required',
            status: status ? '' : 'Status is required'
        };

        if (Object.values(errors).some(error => error)) {
            setFormState({ ...formState, errors });
            return;
        }

        const bug = { id, title, project, priority, desc, status };

        if (bugToEdit) {
            updateBug(bug);
        } else {

            onAddSuccess(bug);
        }

        // setFormState({
        //     title: '',
        //     project: '',
        //     priority: '',
        //     desc: '',
        //     status: '',
        //     errors: {
        //         title: '',
        //         project: '',
        //         priority: '',
        //         desc: '',
        //         status: ''
        //     }
        // });
    };


    return (
        <>

            <div className="form-input">
                <input
                    type="text"
                    className="inp"
                    value={formState.title}
                    onChange={(e) => setFormState({
                        ...formState, title: e.target.value, errors: {
                            ...formState.errors,
                            title: ""
                        }
                    })}
                    placeholder="Title"
                />
                {formState.errors.title && <span className="error">{formState.errors.title}</span>}
                <input
                    type="text"
                    className="inp"
                    value={formState.project}
                    onChange={(e) => setFormState({
                        ...formState, project: e.target.value, errors: {
                            ...formState.errors,
                            project: ""
                        }
                    })}
                    placeholder="Project"
                />
                {formState.errors.project && <span className="error">{formState.errors.project}</span>}
                {/* <input
                    type="text"
                    className="inp"
                    value={formState.priority}
                    onChange={(e) => setFormState({ ...formState, priority: e.target.value })}
                    placeholder="Priority"
                /> */}
                <Filter value={formState.priority}
                    onChange={handleChangeFilter1} />
                {formState.errors.priority && <span className="error">{formState.errors.priority}</span>}
                <input
                    type="text"
                    className="inp"
                    value={formState.status}
                    onChange={(e) => setFormState({
                        ...formState, status: e.target.value, errors: {
                            ...formState.errors,
                            status: ""
                        }
                    })}
                    placeholder="Status"
                />
                {formState.errors.status && <span className="error">{formState.errors.status}</span>}
                <textarea
                    name="desc"
                    id="desc"
                    cols="30"
                    rows="10"
                    value={formState.desc}
                    onChange={(e) => setFormState({
                        ...formState, desc: e.target.value, errors: {
                            ...formState.errors,
                            desc: ""
                        }
                    })}
                    placeholder="Description"
                ></textarea>
                {formState.errors.desc && <span className="error">{formState.errors.desc}</span>}

            </div>
            <Button onClick={saveData} type="submit" title={bugToEdit ? "Update" : "Save"} />

        </>
    );
}

export default AddForm;



