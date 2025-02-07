import {use, useRef} from "react";
import {ProjectsContext} from "../store/projects-context.jsx";

export default function TaskForm() {

    const {createTask} = use(ProjectsContext);

    const task = useRef('');

    function submitHandler(event) {
        event.preventDefault(); // Prevent the form from refreshing the app
        createTask(task.current.value);
        task.current.value = '';
        task.current.focus();
    }

    return (
        <form onSubmit={submitHandler}
              className="flex flex-row gap-4 items-center border-b border-gray-200 py-4">
            <div className="flex-grow-1">
                <input id="newTask" ref={task} type="text" placeholder="Create a task" required={true}
                       autoComplete="off"
                       className="w-full p-2 border border-gray-200"/>
            </div>
            <button type="submit"
                    className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add
                Task
            </button>
        </form>
    );
}