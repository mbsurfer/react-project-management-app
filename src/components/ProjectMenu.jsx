export default function ProjectMenu({projects, onSelectProject, selectedProjectId, showCreateProject}) {

    return (
        <>
            <aside className="w-80 pt-4 bg-stone-800 text-stone-200 shadow-[inset_-10px_0_10px_-10px_rgba(0,0,0,0.5)]">
                <div className="sticky top-0 py-4 w-full">
                    <section className="flex justify-between items-center mb-4 border-b border-stone-600 pb-6 px-4">
                        <h2 className="text-lg font-semibold">
                            Your Projects
                        </h2>
                        <button
                            onClick={showCreateProject}
                            className="text-sm cursor-pointer bg-stone-700 hover:bg-stone-500 font-bold px-2 py-1 rounded">+
                        </button>
                    </section>

                    <ul className="flex flex-col overflow-hidden content-center justify-between">
                        {projects.map((project) => {
                                let className = "w-full text-left cursor-pointer p-4 hover:bg-stone-700";
                                if (selectedProjectId === project.id) {
                                    className += " bg-stone-500";
                                }
                                return (<li key={project.id}>
                                    <button onClick={() => onSelectProject(project.id)}
                                            className={className}>{project.name}</button>
                                </li>);
                            }
                        )}
                    </ul>
                </div>
            </aside>
        </>
    );
}