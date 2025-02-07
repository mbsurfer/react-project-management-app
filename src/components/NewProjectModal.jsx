import {createPortal} from "react-dom";
import {use, useRef} from "react";

import {ProjectsContext} from "../store/projects-context";

export default function NewProjectModal({ref}) {

    const {createProject} = use(ProjectsContext);

    const form = useRef();

    function closeDialog() {
        ref.current.close();
    }

    function resetForm() {
        form.current.reset();
    }

    function handleSubmit() {
        createProject({
            name: form.current.name.value,
            description: form.current.description.value,
            dueDate: new Date(form.current.dueDate.value)
        });
    }

    return createPortal(
        <dialog ref={ref} onClose={resetForm}
                className="dialog-slide-in backdrop:bg-black/90 rounded-md bg-stone-50 m-auto p-16 w-1/3">
            <h2 className="text-2xl mb-8">New Project</h2>
            <form ref={form} method="dialog" className="" onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label className="block mb-1" htmlFor="name">Project Name</label>
                    <input className="w-full p-2 border border-gray-200" type="text" name="name" id="name"
                           autoComplete="off" required={true}/>
                </div>
                <div className="mb-2">
                    <label className="block mb-1" htmlFor="description">Description</label>
                    <textarea className="w-full p-2 border border-gray-200" id="description"
                              name="description"/>
                </div>
                <div className="mb-8">
                    <label className="block mb-1" htmlFor="dueDate">Due Date</label>
                    <input className="w-full p-2 border border-gray-200" type="date" name="dueDate" id="dueDate"
                           autoComplete="off" required={true}/>
                </div>
                <button type="submit"
                        className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">Create
                    Project
                </button>
                <button type="button"
                        onClick={closeDialog}
                        className="cursor-pointer bg-red-500 hover:bgred-700 text-white font-bold py-2 px-4 rounded">Cancel
                </button>
            </form>
        </dialog>
        , document.getElementById('modal-root')
    );
}