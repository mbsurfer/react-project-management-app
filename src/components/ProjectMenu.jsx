import NewProjectModal from "./NewProjectModal.jsx";
import {useRef} from "react";

export default function ProjectMenu({projects, onCreateProject, onSelectProject, selectedProjectIndex}) {

    const dialog = useRef();

    function handleCreateProject() {
        dialog.current.showModal();
    }

    return (
        <>
            <NewProjectModal ref={dialog} onCreateProject={onCreateProject}/>
            <div className="w-80 p-4 bg-gray-200">
                <div className="sticky top-0 p-4 w-full">
                    <section className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-semibold">
                            Your Projects
                        </h2>
                        <button
                            onClick={handleCreateProject}
                            className="text-sm cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-1 rounded">+
                        </button>
                    </section>

                    <ul className="flex flex-col overflow-hidden content-center justify-between">
                        {projects.map((project, index) => {
                                let className = "block p-4 hover:underline";
                                if (selectedProjectIndex === index) {
                                    className += " bg-stone-800 text-white";
                                }
                                return (<li key={index}>
                                    <a href="#" onClick={() => onSelectProject(index)}
                                       className={className}>{project.name}</a>
                                </li>);
                            }
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}