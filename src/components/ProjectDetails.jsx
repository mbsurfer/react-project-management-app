import {use} from "react";
import {ProjectsContext} from "../store/projects-context.jsx";
import ProjectTasks from "./ProjectTasks.jsx";

function formatDate(date) {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

export default function ProjectDetails({project, tasks}) {

    const {deleteProject} = use(ProjectsContext);

    const percentComplete = tasks.filter(task => task.completed).length / tasks.length * 100;

    function handelDeleteProject() {
        confirm(`Are you sure you want to delete project: ${project.name}?`) && deleteProject(project.id);
    }

    return (
        <div className="h-full flex-grow p-4 min-w-xl overflow-auto">
            <section className="pt-4 flex justify-between items-top">
                <div>
                    <h1 className="text-2xl font-bold mb-2">{project.name}</h1>
                    <p className="text-stone-400 mb-4">{formatDate(project.dueDate)}</p>
                    <p className="mb-4">{project.description}</p>
                </div>
                <div>
                    <button
                        onClick={handelDeleteProject}
                        className="cursor-pointer bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-xs">
                        Delete Project
                    </button>
                </div>
            </section>
            {(tasks.length > 0) && <section className="mb-4">
                <div className="w-full bg-stone-300 h-2.5">
                    <div className="bg-stone-500 h-2.5 transition-all duration-300 ease-in-out"
                         style={{width: `${percentComplete}%`}}></div>
                </div>
            </section>}
            <hr className="text-stone-400"/>
            <ProjectTasks tasks={tasks} projectId={project.id}/>
        </div>
    );
}