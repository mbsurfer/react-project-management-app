import ProjectMenu from "./components/ProjectMenu.jsx";
import {useRef} from "react";
import NewProjectModal from "./components/NewProjectModal.jsx";
import ProjectsContextProvider from "./store/projects-context.jsx";
import Project from "./components/Project.jsx";


function App() {

    const dialog = useRef();

    function showCreateProject() {
        dialog.current.showModal();
    }

    return (
        <ProjectsContextProvider>
            <main className="h-full w-full flex flex-row flex-grow overflow-hidden">
                <ProjectMenu showCreateProject={showCreateProject}/>
                <Project showCreateProject={showCreateProject}/>
            </main>
            <NewProjectModal ref={dialog}/>
        </ProjectsContextProvider>
    );
}

export default App;
