import Task from "./Task.jsx";
import TaskForm from "./TaskFrom.jsx";

export default function ProjectTasks({tasks}) {

    return (
        <section className="mt-4">
            <h2 className="text-xl font-bold">Tasks</h2>
            <TaskForm/>
            <ul>
                {!tasks.length &&
                    <li className="text-stone-400 p-4">Time to create some tasks. Get to work!</li>}
                {tasks
                    .slice()
                    .sort((a, b) => {
                        if (a.completed === b.completed) {
                            return new Date(a.createdAt) - new Date(b.createdAt);
                        }
                        return a.completed - b.completed;
                    }).map((task) =>
                        <li key={task.id} className="flex flex-row items-center border-b border-gray-200 p-4">
                            <Task task={task}/>
                        </li>
                    )}
            </ul>
        </section>
    );
}