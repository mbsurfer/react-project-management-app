import {createPortal} from "react-dom";

export default function NewProjectModal({ref}) {
    return createPortal(
        <dialog ref={ref}
                className="dialog-slide-in backdrop:bg-black backdrop:opacity-90 rounded-md bg-stone-50 m-auto p-16 w-1/3">
            <h1 className="text-2xl mb-8">New Project</h1>
            <form method="dialog" className="">
                <div className="mb-4">
                    <label className="block mb-1">Project Name</label>
                    <input className="w-full p-2 border border-gray-200" type="text" name="name" autoComplete="off"/>
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Description</label>
                    <textarea className="w-full p-2 border border-gray-200" name="description"/>
                </div>
                <button type="submit"
                        className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create
                    Project
                </button>
            </form>
        </dialog>
        , document.getElementById('modal-root')
    );
}