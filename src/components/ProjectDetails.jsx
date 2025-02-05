import {useRef} from "react";
import Task from "./Task.jsx";

function formatDate(date) {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

export default function ProjectDetails({onCreateTask, project, onCompleteTask}) {

    const task = useRef('');

    function submitHandler() {
        onCreateTask(project, task.current.value);
        task.current.value = '';
        task.current.focus();
    }

    function handleComplete(task) {
        onCompleteTask(project, task);
    }

    return (
        <div className="h-full flex-grow p-4 pr-12 min-w-xl overflow-auto">
            <section className="pt-4">
                <h1 className="text-2xl font-bold mb-2">{project.name}</h1>
                <p className="text-stone-400 mb-4">{formatDate(project.dueDate)}</p>
                <p className="mb-4">{project.description}</p>
            </section>
            <hr className="text-stone-400"/>
            <section className="mt-4">
                <h2 className="text-xl font-bold">Tasks</h2>
                <form onSubmit={submitHandler}
                      className="flex flex-row gap-4 items-center border-b border-gray-200 py-4">
                    <div className="flex-grow-1">
                        <input ref={task} type="text" placeholder="Create a task" required={true}
                               className="w-full p-2 border border-gray-200"/>
                    </div>
                    <button type="submit"
                            className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add
                        Task
                    </button>
                </form>
                <ul>
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