import {createPortal} from "react-dom";
import {useRef} from "react";

export default function NewProjectModal({ref, onCreateProject}) {

    const form = useRef();
    const projectName = useRef();
    const projectDescription = useRef();

    function closeDialog() {
        ref.current.close();
    }

    function resetForm() {
        form.current.reset();
    }

    function handleSubmit() {
        onCreateProject({
            name: projectName.current.value,
            description: projectDescription.current.value
        });
    }

    return createPortal(
        <dialog ref={ref} onClose={resetForm}
                className="dialog-slide-in backdrop:bg-black backdrop:opacity-90 rounded-md bg-stone-50 m-auto p-16 w-1/3">
            <h1 className="text-2xl mb-8">New Project</h1>
            <form ref={form} method="dialog" className="" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-1">Project Name</label>
                    <input ref={projectName} className="w-full p-2 border border-gray-200" type="text" name="name"
                           autoComplete="off" required={true}/>
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Description</label>
                    <textarea ref={projectDescription} className="w-full p-2 border border-gray-200"
                              name="description"/>
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