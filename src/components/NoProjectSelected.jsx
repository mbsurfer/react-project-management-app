import noProjectImage from '../assets/no-projects.png';

export default function NoProjectSelected({showCreateProject}) {

    return (
        <div className="h-full flex-grow p-4 pr-12 min-w-xl overflow-auto">
            <section className="pt-32 text-center">
                <img src={noProjectImage} alt="Empty task list" className="w-32 h-32 object-contain mx-auto mb-4"/>
                <h2 className="text-2xl font-bold mb-4">No project selected</h2>
                <button type="button"
                        onClick={showCreateProject}
                        className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create
                    Project
                </button>
            </section>
        </div>
    );
}