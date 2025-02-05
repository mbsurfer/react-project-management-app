export default function Task({completed, name, onComplete}) {

    const CompletedTask = ({name}) => {
        return <>
            <span className="flex-grow-1 line-through opacity-50">{name}</span>
            <span className="text-green-500">Completed</span>
        </>;
    }

    const IncompleteTask = ({name, onComplete}) => {
        return <>
            <span className="flex-grow-1">{name}</span>
            <button
                onClick={onComplete}
                className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-xs text-white font-bold py-2 px-4 rounded">Complete
                Task
            </button>
        </>;

    }

    return (
        <>
            {completed && <CompletedTask name={name}/>}
            {!completed && <IncompleteTask name={name} onComplete={onComplete}/>}
        </>
    );

}