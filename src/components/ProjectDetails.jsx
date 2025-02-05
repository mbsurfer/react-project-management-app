import {useRef} from "react";
import Task from "./Task.jsx";

function formatDate(date) {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

export default function ProjectDetails({onCreateTask, project, onCompleteTask, onDeleteProject}) {

    const task = useRef('');

    const percentComplete = project.tasks.filter(task => task.completed).length / project.tasks.length * 100;

    function submitHandler() {
        onCreateTask(project, task.current.value);
        task.current.value = '';
        task.current.focus();
    }

    function handleComplete(task) {
        onCompleteTask(project, task);
    }

    function handelDeleteProject() {
        confirm(`Are you sure you want to delete project: ${project.name}?`) && onDeleteProject(project);
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
            {(project.tasks.length > 0) && <section className="mb-4">
                <div className="w-full bg-stone-300 h-2.5">
                    <div className="bg-stone-500 h-2.5 transition-all duration-300 ease-in-out"
                         style={{width: `${percentComplete}%`}}></div>
                </div>
            </section>}
            <hr className="text-stone-400"/>
            <section className="mt-4">
                <h2 className="text-xl font-bold">Tasks</h2>
                <form onSubmit={submitHandler}
                      className="flex flex-row gap-4 items-center border-b border-gray-200 py-4">
                    <div className="flex-grow-1">
                        <input id="newTask" ref={task} type="text" placeholder="Create a task" required={true}
                               className="w-full p-2 border border-gray-200"/>
                    </div>
                    <button type="submit"
                            className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add
                        Task
                    </button>
                </form>
                <ul>
                    {!project.tasks.length &&
                        <li className="text-stone-400 p-4">Time to create some tasks. Get to work!</li>}
                    {project.tasks
                        .slice()
                        .sort((a, b) => {
                            if (a.completed === b.completed) {
                                return new Date(a.createdAt) - new Date(b.createdAt);
                            }
                            return a.completed - b.completed;
                        }).map((task) =>
                            <li key={task.id} className="flex flex-row items-center border-b border-gray-200 p-4">
                                <Task name={task.name} onComplete={() => handleComplete(task)}
                                      completed={task.completed}/>
                            </li>
                        )}
                </ul>
            </section>
        </div>
    );
}