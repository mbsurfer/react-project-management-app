import {useRef} from "react";

function formatDate(date) {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

export default function ProjectDetails({onCreateTask, project, projectIndex, onCompleteTask}) {

    const task = useRef('');

    function submitHandler() {
        onCreateTask(projectIndex, "New Task");
        task.current.value = '';
        task.current.focus();
    }

    return (
        <main role="main" className="h-full flex-grow p-4 pr-12 overflow-auto">
            <section className="pt-4">
                <h1 className="text-2xl font-bold mb-2">{project.name}</h1>
                <p className="text-stone-400 mb-4">{formatDate(project.createdOn)}</p>
                <p className="mb-4">{project.description}</p>
            </section>
            <hr className="text-stone-400"/>
            <section className="mt-4">
                <h2 className="text-xl font-bold">Tasks</h2>
                <form onSubmit={submitHandler}
                      className="flex flex-row gap-4 items-center border-b border-gray-200 py-4">
                    <div className="flex-grow-1">
                        <input ref={task} type="text" placeholder="Create a task"
                               className="w-full p-2 border border-gray-200"/>
                    </div>
                    <button type="submit"
                            className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add
                        Task
                    </button>
                </form>
                <ul>
                    {project.tasks.map((task, index) =>
                        <li key={index} className="flex flex-row items-center border-b border-gray-200 p-4">
                            <span className="flex-grow-1">{task.name}</span>
                            {task.completed && <span className="text-green-500">Completed</span>}
                            {!task.completed && <button
                                onClick={() => onCompleteTask(projectIndex, index)}
                                className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-xs text-white font-bold py-2 px-4 rounded">Complete
                                Task
                            </button>}

                        </li>
                    )}
                </ul>
            </section>
        </main>
    );
}