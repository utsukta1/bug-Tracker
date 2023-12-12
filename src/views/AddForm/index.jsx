// import React, { useState, useEffect } from "react";
// import Button from "../button";
// import "./index.css";

// function AddForm(props) {
//     const { onAddSuccess } = props;
//     const initialFormState = {
//         title: '',
//         project: '',
//         priority: '',
//         desc: '',
//         status: '',

//         errors: {
//             title: '',
//             project: '',
//             priority: '',
//             desc: '',
//             status: ''

//         }
//     };
//     const [formState, setFormState] = useState(initialFormState);



//     const saveData = () => {
//         const { title, project, priority, desc, status } = formState;

//         const errors = {
//             title: title ? '' : 'Title is required',
//             project: project ? '' : 'Project is required',
//             priority: priority ? '' : 'Priority is required',
//             desc: desc ? '' : 'Description is required',
//             status: status ? '' : 'Status is required'
//         };

//         if (Object.values(errors).some(error => error)) {
//             setFormState({ ...formState, errors });
//             return;
//         }

//         const bug = {
//             title,
//             project,
//             priority,
//             desc,
//             status
//         };

//         onAddSuccess(bug);

//         setFormState(initialFormState);
//     };

//     return (
//         <>
//             <form>
//                 <div className="form-input">
//                     <input
//                         type="text"
//                         className="inp"
//                         value={formState.title}
//                         onChange={(e) => setFormState({ ...formState, title: e.target.value })}
//                         placeholder="Title"
//                     />
//                     {formState.errors.title && <span className="error">{formState.errors.title}</span>}
//                     <input
//                         type="text"
//                         className="inp"
//                         value={formState.project}
//                         onChange={(e) => setFormState({ ...formState, project: e.target.value })}
//                         placeholder="Project"
//                     />
//                     {formState.errors.project && <span className="error">{formState.errors.project}</span>}
//                     <input
//                         type="text"
//                         className="inp"
//                         value={formState.priority}
//                         onChange={(e) => setFormState({ ...formState, priority: e.target.value })}
//                         placeholder="Priority"
//                     />
//                     {formState.errors.priority && <span className="error">{formState.errors.priority}</span>}
//                     <input
//                         type="text"
//                         className="inp"
//                         value={formState.status}
//                         onChange={(e) => setFormState({ ...formState, status: e.target.value })}
//                         placeholder="Status"
//                     />
//                     {formState.errors.status && <span className="error">{formState.errors.status}</span>}
//                     <textarea
//                         name="desc"
//                         id="desc"
//                         cols="30"
//                         rows="10"
//                         value={formState.desc}
//                         onChange={(e) => setFormState({ ...formState, desc: e.target.value })}
//                         placeholder="Description"
//                     ></textarea>
//                     {formState.errors.desc && <span className="error">{formState.errors.desc}</span>}
//                 </div>
//                 <Button onClick={saveData} title="Save" />
//             </form>
//         </>
//     );
// }

// export default AddForm;


import React, { useState, useEffect } from "react";
import Button from "../button";
import "./index.css";

function AddForm(props) {
    const { onAddSuccess, bugToEdit, updateBug } = props;
    const [formState, setFormState] = useState({
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

    useEffect(() => {
        if (bugToEdit) {
            // If editing, set initial form values
            setFormState({
                ...formState,
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

        const { title, project, priority, desc, status } = formState;

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

        const bug = { title, project, priority, desc, status };

        if (bugToEdit) {
            // If editing, call updateBug function
            updateBug(bug);
        } else {
            // If adding new bug, call onAddSuccess function
            onAddSuccess(bug);
        }

        setFormState({
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
    };

    return (
        <>

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
                <input
                    type="text"
                    className="inp"
                    value={formState.status}
                    onChange={(e) => setFormState({ ...formState, status: e.target.value })}
                    placeholder="Status"
                />
                {formState.errors.status && <span className="error">{formState.errors.status}</span>}
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
            <Button onClick={saveData} type="submit" title={bugToEdit ? "Update" : "Save"} />

        </>
    );
}

export default AddForm;



