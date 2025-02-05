export default function ProjectMenu({projects, onSelectProject, selectedProjectId, showCreateProject}) {

    return (
        <>
            <aside className="w-80 pt-4 px-1 bg-gray-200">
                <div className="sticky top-0 p-4 w-full">
                    <section className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-semibold">
                            Your Projects
                        </h2>
                        <button
                            onClick={showCreateProject}
                            className="text-sm cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-1 rounded">+
                        </button>
                    </section>

                    <ul className="flex flex-col overflow-hidden content-center justify-between">
                        {projects.map((project) => {
                                let className = "block p-4 hover:underline";
                                if (selectedProjectId === project.id) {
                                    className += " bg-stone-800 text-white";
                                }
                                return (<li key={project.id}>
                                    <a href="#" onClick={() => onSelectProject(project.id)}
                                       className={className}>{project.name}</a>
                                </li>);
                            }
                        )}
                    </ul>
                </div>
            </aside>
        </>
    );
}