import {use} from "react";
import {ProjectsContext} from "../store/projects-context.jsx";

export default function Task({task}) {

    const {completeTask} = use(ProjectsContext);

    const CompletedTask = ({task}) => {
        return <>
            <span className="flex-grow-1 line-through opacity-50">{task.name}</span>
            <span className="text-green-500">Task Completed</span>
        </>;
    }

    const IncompleteTask = ({task}) => {
        return <>
            <span className="flex-grow-1">{task.name}</span>
            <button
                onClick={() => completeTask(task.id)}
                className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-xs text-white font-bold py-2 px-4 rounded">Complete
                Task
            </button>
        </>;

    }

    return (
        <>
            {task.completed && <CompletedTask task={task}/>}
            {!task.completed && <IncompleteTask task={task}/>}
        </>
    );

}